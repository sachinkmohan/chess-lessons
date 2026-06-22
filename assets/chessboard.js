/* Reusable chessboard renderer for the chess-lessons workspace.
 *
 * Pair with assets/chessboard.css. Exposes a global `CB` with:
 *
 *   CB.fromFEN(fen)            -> pieces object (just the placement field is read)
 *   CB.render(el, opts)        -> static board; returns a controller
 *   CB.puzzle(mountEl, pz)     -> interactive click-to-answer board with green/red arrows
 *
 * A "pieces" object maps square -> { t:'KQRBNP', c:'w'|'b' }.
 * Colours accept names ('green','red','slate','mark','blue') or any CSS colour.
 *
 *   CB.render(el, {
 *     pieces:     CB.fromFEN('rnbqkbnr/8/...'),   // or an explicit object
 *     highlights: { e3:'mark', d4:'red' },        // shade squares being discussed
 *     arrows:     [ {from:'c8', to:'f5', color:'green'} ],
 *     badges:     [ {sq:'d4', n:1, color:'red'} ], // numbered dots (move-path steps)
 *     small:      true                             // ~half-size diagram
 *   });
 *
 *   CB.puzzle(root, {
 *     num, prompt, turn, pieces, highlights,
 *     best:['d6','d7'], bestFrom:'d4',
 *     trap:{ from:'d4', to:'b2' },
 *     good, trapMsg, bad, reveal
 *   });
 */
(function (global) {
  const GLYPH = { K: '♚', Q: '♛', R: '♜', B: '♝', N: '♞', P: '♟' };
  const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const SVGNS = 'http://www.w3.org/2000/svg';
  const COLORS = { green: '#2f7d32', red: '#b23b3b', slate: '#555', mark: '#e0a23a', blue: '#2f6ab0' };

  const resolve = (c) => COLORS[c] || c || COLORS.mark;
  function toRGBA(hex, a) {
    let h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map((x) => x + x).join('');
    const n = parseInt(h, 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }
  const sqCenter = (name) => ({ x: FILES.indexOf(name[0]) + 0.5, y: (8 - parseInt(name[1], 10)) + 0.5 });

  function fromFEN(fen) {
    const rows = fen.split(' ')[0].split('/');
    const pieces = {};
    for (let i = 0; i < 8; i++) {
      const rank = 8 - i; let file = 0;
      for (const ch of rows[i]) {
        if (/\d/.test(ch)) { file += parseInt(ch, 10); }
        else { pieces[FILES[file] + rank] = { t: ch.toUpperCase(), c: ch === ch.toUpperCase() ? 'w' : 'b' }; file++; }
      }
    }
    return pieces;
  }

  function coordEl(cls, text) {
    const c = document.createElement('span');
    c.className = 'cb-coord ' + cls; c.textContent = text; return c;
  }
  function pieceEl(pc) {
    const s = document.createElement('span');
    s.className = 'cb-piece cb-' + pc.c; s.textContent = GLYPH[pc.t]; return s;
  }
  function applyHighlight(sq, color) {
    const o = document.createElement('div');
    o.className = 'cb-hl'; o.style.background = toRGBA(resolve(color), 0.45);
    sq.insertBefore(o, sq.firstChild);
  }

  function drawArrow(svg, from, to, color) {
    const a = sqCenter(from), b = sqCenter(to);
    const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len, head = 0.46, halfW = 0.26;
    const tipx = b.x - ux * 0.10, tipy = b.y - uy * 0.10;
    const basex = tipx - ux * head, basey = tipy - uy * head;
    const px = -uy, py = ux;
    const line = document.createElementNS(SVGNS, 'line');
    line.setAttribute('x1', a.x); line.setAttribute('y1', a.y);
    line.setAttribute('x2', basex); line.setAttribute('y2', basey);
    line.setAttribute('stroke', color); line.setAttribute('stroke-width', 0.16);
    line.setAttribute('stroke-linecap', 'round'); line.setAttribute('opacity', 0.9);
    svg.appendChild(line);
    const poly = document.createElementNS(SVGNS, 'polygon');
    poly.setAttribute('points',
      `${tipx},${tipy} ${basex + px * halfW},${basey + py * halfW} ${basex - px * halfW},${basey - py * halfW}`);
    poly.setAttribute('fill', color); poly.setAttribute('opacity', 0.9);
    svg.appendChild(poly);
  }
  function drawBadge(svg, sqName, num, color) {
    const c = sqCenter(sqName);
    const circ = document.createElementNS(SVGNS, 'circle');
    circ.setAttribute('cx', c.x); circ.setAttribute('cy', c.y); circ.setAttribute('r', 0.27);
    circ.setAttribute('fill', color); circ.setAttribute('stroke', '#fff'); circ.setAttribute('stroke-width', 0.04);
    svg.appendChild(circ);
    const t = document.createElementNS(SVGNS, 'text');
    t.setAttribute('x', c.x); t.setAttribute('y', c.y);
    t.setAttribute('text-anchor', 'middle'); t.setAttribute('dominant-baseline', 'central');
    t.setAttribute('font-size', 0.34); t.setAttribute('fill', '#fff'); t.setAttribute('font-weight', 'bold');
    t.textContent = num; svg.appendChild(t);
  }

  function render(el, opts) {
    opts = opts || {};
    const pieces = opts.pieces || {};
    const highlights = opts.highlights || {};
    el.classList.add('cb-board');
    if (opts.small) el.classList.add('cb-sm');
    el.innerHTML = '';
    const squares = {};
    for (let rank = 8; rank >= 1; rank--) {
      for (let file = 0; file < 8; file++) {
        const name = FILES[file] + rank;
        const sq = document.createElement('div');
        sq.className = 'cb-sq ' + (((file + rank) % 2 === 0) ? 'cb-light' : 'cb-dark');
        sq.dataset.sq = name;
        if (highlights[name]) applyHighlight(sq, highlights[name]);
        if (file === 0) sq.appendChild(coordEl('cb-rank', rank));
        if (rank === 1) sq.appendChild(coordEl('cb-file', FILES[file]));
        if (pieces[name]) sq.appendChild(pieceEl(pieces[name]));
        el.appendChild(sq);
        squares[name] = sq;
      }
    }
    const svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('class', 'cb-arrows'); svg.setAttribute('viewBox', '0 0 8 8');
    svg.setAttribute('preserveAspectRatio', 'none');
    el.appendChild(svg);
    (opts.arrows || []).forEach((a) => drawArrow(svg, a.from, a.to, resolve(a.color)));
    (opts.badges || []).forEach((b) => drawBadge(svg, b.sq, b.n, resolve(b.color)));
    return {
      el, svg, squares,
      clearArrows() {
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        Object.values(squares).forEach((s) => s.classList.remove('cb-miss', 'cb-hit', 'cb-hit-red'));
      },
      arrow(from, to, color) { drawArrow(svg, from, to, resolve(color)); },
      badge(sq, n, color) { drawBadge(svg, sq, n, resolve(color)); },
      highlight(name, color) { applyHighlight(squares[name], color); }
    };
  }

  function puzzle(mount, pz) {
    const wrap = document.createElement('div');
    wrap.className = 'cb-puzzle';
    if (pz.prompt) {
      const p = document.createElement('p'); p.className = 'cb-prompt';
      p.textContent = (pz.num ? pz.num + '. ' : '') + pz.prompt; wrap.appendChild(p);
    }
    if (pz.turn) {
      const t = document.createElement('p'); t.className = 'cb-turn'; t.textContent = pz.turn; wrap.appendChild(t);
    }
    const boardEl = document.createElement('div');
    wrap.appendChild(boardEl);
    const controls = document.createElement('div'); controls.className = 'cb-controls';
    const btn = document.createElement('button'); btn.className = 'cb-btn'; btn.textContent = 'Show me the answer';
    controls.appendChild(btn); wrap.appendChild(controls);
    const fb = document.createElement('p'); fb.className = 'cb-feedback'; wrap.appendChild(fb);
    mount.appendChild(wrap);

    const api = render(boardEl, { pieces: pz.pieces, highlights: pz.highlights });
    const setFb = (text, cls) => { fb.textContent = text; fb.className = 'cb-feedback ' + cls; };

    // Two modes:
    //   move mode   -> pz.best (array) + pz.bestFrom (+ optional pz.trap): feedback as arrows.
    //   select mode -> pz.answer (string|array): "click the right square", feedback as an outline.
    const selectMode = pz.answer !== undefined;
    const answers = selectMode ? (Array.isArray(pz.answer) ? pz.answer : [pz.answer]) : [];
    const hitClass = pz.answerColor === 'red' ? 'cb-hit-red' : 'cb-hit';
    const hitFbCls = pz.answerColor === 'red' ? 'bad' : 'good';

    Object.entries(api.squares).forEach(([name, sq]) => {
      sq.classList.add('cb-pickable');
      sq.addEventListener('click', () => {
        api.clearArrows();
        if (selectMode) {
          if (answers.includes(name)) { sq.classList.add(hitClass); setFb('✓ ' + pz.good, hitFbCls); }
          else { sq.classList.add('cb-miss'); setFb('✗ ' + pz.bad, 'bad'); }
        } else if (pz.best.includes(name)) {
          api.arrow(pz.bestFrom, name, 'green'); setFb('✓ ' + pz.good, 'good');
        } else if (pz.trap && name === pz.trap.to) {
          api.arrow(pz.trap.from, pz.trap.to, 'red'); setFb('✗ ' + pz.trapMsg, 'bad');
        } else {
          sq.classList.add('cb-miss'); setFb('✗ ' + pz.bad, 'bad');
        }
      });
    });
    btn.addEventListener('click', () => {
      api.clearArrows();
      if (selectMode) {
        answers.forEach((a) => api.squares[a].classList.add(hitClass));
        setFb(pz.reveal || pz.good, 'neutral');
      } else {
        if (pz.trap) api.arrow(pz.trap.from, pz.trap.to, 'red');
        api.arrow(pz.bestFrom, pz.best[0], 'green');
        setFb(pz.reveal, 'neutral');
      }
    });
    return api;
  }

  global.CB = { GLYPH, FILES, COLORS, fromFEN, render, puzzle };
})(window);

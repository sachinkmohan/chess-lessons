# Notes

## Teaching preferences
- Sessions are short: 5-10 min. Keep lessons tiny and completable in one sitting.
- Plays 3+2 blitz on chess.com, currently ~300 rating (as of 2026-06-16).

## Ratings (corrected 2026-06-17)
- Real chess.com: ~493 Rapid, ~300 Blitz (3+2). The "1000" is a DUOLINGO score — not a real
  rating; do not treat it as a goal. See LR-0003.
- North star = chess.com Rapid (primary training ground). Milestones: 800 → 1200.

## Working notes
- Self-reported loss patterns (2026-06-16): runs out of time, hangs pieces, misses free material.
  Does NOT report getting checkmated fast. So the plan starts with board-awareness / blunder-check,
  not opening or mating-attack defense.
- User asked "what to learn next" and leaned toward openings; redirected to board awareness, which
  they accepted by proceeding. Watch for the recurring instinct to grind openings — gently redirect.
- Already knows fork/pin/skewer by concept (2026-06-17) — see LR-0002. Don't teach the motifs;
  any tactics work should be timed pattern-recognition reps (speed), not instruction.
- Next-session ideas: (1) basic checkmates — converting won positions (K+Q, two-rook ladder);
  (2) applying the scan in slower time controls (10+0 / 15+10) then transferring to blitz;
  (3) personalized review of a real lost game if they share one.

## Game review #1 (2026-06-22) — see LR-0004
- Did first real game review (9 games, handle sacmonrocks). Verified ratings via chess.com API:
  Rapid 452/best567 (15 games), Blitz 331/best863 (203), Bullet 175/best621 (1,495 games!).
- BIG misconception surfaced & corrected: user thought Scandinavian = build f7-e6-d5-c6-b7 fort.
  Real root cause of all Black losses: ...e6 traps the light-squared bishop on c8. Taught the rule
  "develop the light bishop (Bf5/Bg4) BEFORE ...e6" + 3-move survival plan. → Lesson 0003.
- Opponents almost never play 2.exd5 (decline the Scandinavian); user had no plan out of book.
- Format decision: commits to Rapid (improve) + 3+2/5-min blitz (fun), DROP bullet. Hold them to it.
- The Lesson-2 stalemate happened for REAL (vs P0RC0S, 72.h7, K+h-pawn). Good moment to revisit
  Lesson 2 / the rook-pawn ending next time if it recurs.
- Recurring instinct still present: greedy queen pawn-grabs as Black (e.g. ...Qxb2) → queen chased
  → mated. Possible future micro-lesson: "don't take the b2/poison pawn with the queen in the opening."

## Game review #2 (2026-06-22, same day) — see LR-0005
- 4 Rapid games, all wins, rating 482 → 551 in one session. Lessons are landing:
  (1) played Rapid not bullet (format decision held!); (2) applied Lesson 3 vs 2.e5 — bishop out
  (...Be6/...Bf5) BEFORE ...e6; (3) found a real mate as White (Qf8#).
- The greedy-queen leak materialized for real (game 2: ...Qxd4/...Qxb2 spree, queen nearly trapped,
  won only on opponent blunders). Built Lesson 0004 "The Greedy Queen" around that exact position.
- Wins are coming from out-blundering weak opponents, not clean play. Future framing: make the wins
  BORING/reliable (blunder-check + queen home), not flashier.
- Lesson HTML now uses green/red ARROWS for feedback (user preference) + a "Show me the answer" button.
  Reference cards now include board diagrams too. Apply this style to any new lessons.

## Board rendering: USE THE SHARED MODULE (assets/chessboard.css + assets/chessboard.js)
- Do NOT hand-write board HTML/CSS/JS in new lessons. Include the module and pass data:
  `<link rel="stylesheet" href="../assets/chessboard.css">` + `<script src="../assets/chessboard.js">`.
  - Static board:  `CB.render(el, { pieces: CB.fromFEN('...'), highlights:{e3:'mark'}, arrows:[...], badges:[...], small:true })`
  - Interactive:   `CB.puzzle(root, { num, prompt, turn, pieces, highlights, best:[], bestFrom, trap:{from,to}, good, trapMsg, bad, reveal })`
  - Positions as FEN strings via `CB.fromFEN` (chess.com game JSON has a `fen` field — reuse it). Much less code.
- The module already bakes in the agreed conventions: a–h/1–8 coordinates on every board; green/red
  arrow feedback + "Show me the answer" button; translucent square highlights.
- HIGHLIGHT squares you mention in prose (user isn't fluent in notation, asked 2026-06-22): pass
  `highlights:{e3:'mark', d4:'red'}` and use inline `<span class="cb-chip">e3</span>` chips in the text so
  the square name and the shaded square match colour. Colours: mark=amber, green, red, slate, blue.
- Prefer VISUALS over walls of text/tables — when narrating a game, draw the position(s) or a move-path
  (numbered badges, see Lesson 4's "queen's tour"), don't just list moves.
- ALL lessons (1–4) and the survival card now use the shared module. The module supports two puzzle
  modes: move mode (pz.best/bestFrom/trap → arrows) and select mode (pz.answer, optional answerColor:'red'
  → green/red outline, for "click the right piece" or "identify the bad square" puzzles).

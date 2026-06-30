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

## Game review #3 (2026-06-30) — see LR-0006
- 12 Rapid games, Jun 26–30. Rating arc: 656 → 597 (low) → 607. Net −49 points.
- STALEMATE RECURRED (vs JONFLACOM, Jun 28): had Q+R+B vs K+B+P, played Rxf4 (capturing bishop),
  king on h3 had zero escape squares. Immediate stalemate draw. This is Lesson 2 content that has
  NOT become automatic. Built Lesson 0005 from the exact game position. Needs ~1-week follow-up drill.
- Greedy captures still present: took c2 pawn with bishop on move 7 (vs martinon2) — same greed
  pattern as Lesson 4 but with a bishop. Don't re-teach yet; wait for it to cost a clear game.
- Time trouble: lost on clock vs vihu49 (2 seconds left). Future lesson idea: clock-management
  habit (check clock every ~5 moves after move 20).
- Got mated by rook-lift (Rxg7-Rh7-Rh8#) vs R_Abarna after allowing f5-f6 pawn push. Not
  priority yet at 600 level, but flag for future lesson at 700+.
- Format decision still holding: all games were Rapid (not bullet). Praise + maintain.

## Game review #3, lesson #2 (2026-07-01) — Lesson 0006 "King & Rook mate"
- User asked "what ELSE can you teach from last-games-30-06.json" after the stalemate lesson.
  Offered 3 themes (K+R conversion / rook-lift mate / clock); user chose K+R conversion.
- Built Lesson 0006 from the Marcopolo_38 game (Jun 29): user had R+N+P vs LONE KING and
  DREW by "timeout vs insufficient material" (flag fell move 72 after shuffling moves 59–71).
  Two-in-one lesson: (a) the K+R box mate method "wall, walk, check"; (b) clock habit when winning
  (simplify + glance at clock after move 20). Puzzle 2's trap is literally a shuffle (Rb7 instead
  of Ra8#) to mirror the real mistake.
- STILL PENDING for future sessions (flagged but not yet taught): deeper clock-management lesson
  (vihu49). Greedy-bishop still waiting to cost a game.
- Open offer made to user: live timed K+R mate drills "until automatic" — follow up if they want it.

## Game review #3, lesson #3 (2026-07-01) — Lesson 0007 "The f6 Fire Alarm"
- User asked to build a lesson from the R_Abarna game (the rook-lift checkmate). Built Lesson 0007.
- Game: user (Black) castled kingside, played 13...Bxf3 → 14.gxf3 OPENING THE G-FILE at own king;
  let White plant a pawn on f6 (covers g7+e7); 20.Rhg1 loaded the open g-file; 21.Rxg7+ (king can't
  recapture, f6 guards g7) Kf8 22.Rh7 Re6 23.Rh8#. Mated in 23.
- Teaching: (a) "f6 fire alarm" — enemy pawn on f6/f3 next to castled king = danger; (b) don't open
  files toward your own king (the ...Bxf3/gxf3 decision); (c) recognize the g7 rook-sac pattern.
  Puzzle 1 = play Rxg7+ as the attacker (learn pattern); Puzzle 2 = rewind to move 13, retreat the
  bishop instead of opening the g-file.
- Lessons 5, 6, 7 all now in index.html. Three of the four flagged future-themes from LR-0006 now
  taught (stalemate=L5, K+R convert=L6, rook-lift/f6=L7). Remaining: dedicated clock-management lesson.

## Game review #3, lesson #4 (2026-07-01) — Lesson 0008 "Develop Before You Devour" (THE 700 lesson)
- User asked: "what ONE change gets me to 700? what pattern to avoid?" Read all 13 games in
  last-games-30-06.json. THE dominant leak = early QUEEN PAWN-RAIDS (greedy queen, Lesson 4 theme,
  STILL #1). Appeared in 5/13 games, BOTH colors:
  - WINS (got away with it, opponent equally loose): vs ErrroB (Qxb2/c2/c3/d4), vs paple123 (Qxb2/b5).
  - LOSSES (steadier opp punished it): vs martinon2 (Bxc2/Qxa2/Qxb2, king stuck f8), vs richardpizani
    (Qxb7/c6/d5 — won 3 PAWNS and still lost, king stranded e2), vs bertilft (Qxb7/a6, gave up b-file).
- Framing that landed the point: "the 2 wins were both players blundering; the 3 losses were the SAME
  habit punished. That IS the 600→700 wall." The ONE CHANGE = develop everyone + castle BEFORE the
  queen takes any pawn; 3-question checklist (knights+bishops out? castled? can queen be chased?).
- Puzzle 1 = martinon2 m7 (Black): Be7/Bd6 (develop→castle) vs Bxc2 trap. Puzzle 2 = bertilft m16
  (White): Ne5 (improve worst piece) vs Qb5 raid trap. Both from his real games, both colors.
- Concrete homework given IN the lesson: "next 10 games — no queen capture before move 12 unless fully
  developed + castled." FOLLOW UP on this next review; count queen-stayed-home rate.
- NOTE: this is the 4th time the greedy-queen theme has surfaced (LR-0004, LR-0005/Lesson4, LR-0006,
  now). It is THE habit. If it persists after this lesson, consider a hooks-based reminder or drill.

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

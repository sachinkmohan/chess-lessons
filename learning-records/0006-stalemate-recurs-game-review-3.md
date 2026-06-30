# Game review #3 — stalemate recurs; rating dips to 597

12 rapid games reviewed (Jun 26–30, 2026). Handle: sacmonrocks.
Rating arc: 656 (start) → 597 (low) → 607 (end). Net −49 points.
Record approximately: 4 wins, 7 losses, 1 stalemate-draw, 1 abandoned.

## Critical finding: stalemate struck again (→ Lesson 0005)

Game vs JONFLACOM (Jun 28): had Q+R+B vs K+B+P, completely winning.
On move 56, played Rxf4 (capturing the last white piece = the bishop on f4).
Result: White king on h3 had zero legal moves, pawn h6 blocked by Black king on h7.
Instant stalemate draw.

The correct move was 56…Qg2+ (or Qg3+, or Qh2+): any queen check forces the king to h4,
eliminating stalemate, then Rxf4+ wins the bishop safely.

This is Lesson 2 content (Finishing the Job) that clearly has not become automatic. The
lesson was taught 2026-06-22; the mistake recurred 2026-06-28. Built Lesson 0005 from the
actual game position. Spaced retrieval: this lesson needs a follow-up drill in ~1 week.

## Other patterns observed

**Greedy opening captures (martinon2, game 10):** Played 7…Bxc2 as Black in the Scandinavian
(took the c2 pawn with the bishop). Created active counterplay for White along the c-file, led
to a lost position. Same theme as Lesson 4 (greedy queen) but applied to a bishop. Worth noting
for future: any early piece that grabs a wing pawn and walks into the opponent's active zone is
probably a trap.

**Time trouble (vihu49, game 7):** Lost on timeout (2 seconds left) in a complex but roughly
equal position. Had ~8 minutes vs opponent's ~4 minutes earlier in the game. Clock management
habit not yet present. Flag for future: habit of checking the clock every few moves after move 20.

**Getting mated by rook lift (R_Abarna, game 8):** Played Alekhine/Scandinavian as Black. After
castling kingside, allowed White to push f5-f6, then Rxg7+-Rh7-Rh8#. Classic rook-lift mating
pattern. Not a priority at 600 level but worth one lesson eventually: "when the opponent's f-pawn
reaches f6, your kingside is in danger."

**Wins came from tactical chaos, not clean play:** Same meta-observation as LR-0005. Opponents
blunder and user punishes well. But unforced errors (stalemate, time loss, greed) are still costing
full points.

## What's working

- Plays Rapid (not bullet) — format decision holding.
- Scandinavian as Black: applying bishop-out-before-e6 rule (LR-0004/Lesson 3) in some games.
- Tactical awareness: converting opponent blunders when spotted.
- Queen activity: using the queen effectively (even if sometimes too greedily).

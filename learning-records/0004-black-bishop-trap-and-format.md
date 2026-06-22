# Black's ...e6 bishop-trap is the root loss-cause; commits to Rapid+blitz, drops bullet

First personalized game review (2026-06-22), from 9 real games (chess.com handle: **sacmonrocks**).

## Verified ratings (from chess.com API, supersedes the ~493 estimate in LR-0003)
- Rapid: **452** (best 567), only **15 games** played.
- Blitz: **331** (best **863** — has played much stronger before), 203 games.
- Bullet: **175** (best 621), **1,495 games** — the overwhelming majority of play.

## Key diagnosis
- **Wins as White (London), loses as Black** — lost all ~4 Black games, including both Rapid games.
- **Root cause of the Black losses:** the user believes the Scandinavian = "build the
  f7-e6-d5-c6-b7 pawn fort." This is a misconception. (a) That structure is Caro-Kann/French,
  not the Scandinavian; (b) more importantly, playing `...e6` early **imprisons the light-squared
  bishop on c8** behind its own pawns. This bad bishop → poor development → king stuck/queen
  sortie → mate, in every Black loss.
- **Opponents decline the Scandinavian almost always** (2.e5, 2.Nf3, 2.Qf3, 2.d3 — never 2.exd5),
  so the user is out of book from move 2 with no plan. The user did not realize this.
- The **stalemate from Lesson 2 happened for real** (vs P0RC0S, 72.h7 in a K+h-pawn ending) —
  validates that LR/Lesson 2 is on target.

## The corrective rule taught
> Never play `...e6` until the light-squared bishop is already developed OUTSIDE the chain
> (to f5 or g4). Plus the 3-move survival plan: take the centre if you can → knights before
> the queen → castle. (Lesson 0003, reference: black-vs-e4-survival.html)

## Format decision (supersedes the "Rapid only" framing of MISSION/LR-0003)
User explicitly committed (2026-06-22): **play Rapid to improve, 3+2 / 5-min blitz for fun,
and stop grinding bullet** (1,495 bullet games at 1s/move actively trains the opposite of the
blunder-check habit). This is the single highest-leverage behaviour change. Watch that it sticks.

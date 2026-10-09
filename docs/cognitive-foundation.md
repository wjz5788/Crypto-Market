# Cognitive Foundation: Wan Weigang × Crypto Market OS

**Status:** integration contract; NOT proof of runtime invocation or production deployment.

## Source precedence
1. Actual market facts, law, user constraints, observed outcomes.
2. Original user-provided `wan-weigang-modern-thinking-tools-100` v2.0 skill, for reasoning procedures.
3. Original user-provided Crypto Alpha Skill v4.3, for crypto-specific validation.
4. This adapter, for orchestration only.

Install exact original files at the paths documented in `AGENTS.md`. If unavailable, mark `canonical_skill_loaded=false`; do not substitute a fabricated copy of 100 tools.

## Routing matrix
| Trigger | Provisional reasoning lens | Domain evidence | Update criterion |
|---|---|---|---|
| New token accelerating | base rates, heavy tails | token identity, liquidity, unique buyers, volume, holder growth | growth sustains beyond initial burst |
| Access/listing or new chain launch | opportunity window, information value | official announcement, accessible trading route, settlement and net demand | access drives measured incremental buyers |
| Pricing anomaly/claim of 2x | falsification, expected value | reference-class returns, upside ceiling, dilution, slippage and fees | risk-adjusted result outperforms alternatives |
| Dominant narrative and leader | feedback loops, systems thinking | genuine usage, fees, users, capital conversion, distribution | usage turns into capture and demand |
| Competitor shock | opportunity cost, moat fragility | lower-cost substitutes, routing, switching costs, incentives | rent, bypassability or buyer base changes |
| LP opportunity | non-ergodicity, marginal analysis | trading fees, liquidity depth, IL, toxic order flow, rebalance/exit costs | positive net return across scenarios |

The lens names above are **workflow shortcuts**, not a claim of exact verbatim course taxonomy. Once canonical files exist, select actual tool definitions according to their declared triggers.

## Required research record (JSON shape)
```json
{
  "observed_at": "ISO-8601 UTC timestamp",
  "identity": {"chain": "", "contract": "", "verified": false},
  "claim": "",
  "facts": [{"statement": "", "source": "", "observed_at": ""}],
  "inferences": [],
  "unknowns": [],
  "reasoning": {"canonical_skill_loaded": false, "primary_tool": "", "supporting_tools": [], "counterevidence": []},
  "reference_class": {"definition": "", "sample_size": null, "observed_rate": null},
  "business": {"genuine_usage": null, "value_capture": null, "marginal_buyers": null, "competition": null},
  "execution": {"liquidity_verified": false, "slippage_estimate": null, "exit_route_verified": false},
  "thesis": "",
  "invalidation": [],
  "state": "RESEARCHING",
  "next_cheapest_test": "",
  "alerts": [],
  "outcomes": {"d1": null, "d3": null, "d7": null},
  "manual_trade_approval": false
}
```

## Hard gates
- No contract/chain verification: cannot READY.
- No meaningful volume and exit-depth evidence: cannot READY.
- Missing falsifiable failure condition: cannot READY.
- Competitor / fundamental advantage only assumed: cannot READY.
- No comparable upside/downsides and no route cost estimate: cannot READY.
- Missing independent evidence: mark uncertain; do not auto-promote.
- No order placement or signing without explicit user approval.

## Review and feedback
Keep immutable initial hypotheses, later evidence deltas, and realized 1d/3d/7d results. Compare against BTC and relevant new-token cohort, track detection latency, missed candidates, false positives, net returns after fees/slippage, and calibration. At 10 decisions or 30 days, reevaluate thresholds and document version changes. Update weights only with recorded outcomes.

## What to build next
1. Wire the actual local Agent runner to read both exact original SKILL.md files and confirm load status.
2. Emit records in the above shape from Radar without changing current classification.
3. Add deterministic gate tests (invalid identity, no liquidity, missing failure condition).
4. Add outcome tracking, then candidate ranking and state-change alerting.
5. Only after validation, expose the AI conclusion in the main UI.

Research first. Execution second.

# Crypto Market OS — Agent Operating Contract

## Priority and scope
This repository is a Crypto research system. **Wan Weigang, Modern Thinking Tools 100 Lectures v2.0** is the reasoning foundation (how to think); **Crypto Market Alpha Skill v4.3** is the domain execution layer (what to verify). Neither framework is a substitute for market evidence. The canonical source files are user-owned SKILL.md (2026-08-28) and SKILL-v4.3.md (2026-09-29), respectively. Do not invent or paraphrase missing portions as canonical rules.

When canonical skill files are installed locally, load them first. Preferred paths:
- `skills/wan-weigang-modern-thinking-tools-100/SKILL.md`
- `skills/crypto-market-alpha/SKILL.md`
If absent, report that the canonical source is unavailable and use this repository's short integration protocol only. Never say the original 100 tools are installed unless the exact original file exists.

## Decision loop (mandatory for non-trivial research)
1. Define user objective, loss constraints, time horizon, state/feedback, biggest unknown, and failure modes.
2. Select **one primary thinking tool** from the canonical Wan Weigang skill, with at most three supporting/counterexample tools. If the source is absent, use a provisional generic label; do not claim exact course taxonomy.
3. Collect timestamped evidence and contradictory evidence: token contract/chain identity, main liquidity pool, market cap/FDV, turnover, genuine usage, incremental buyers, catalysts, competitor bypassability, and route/execution costs.
4. Separate **facts**, **inferences**, and **unknowns**. Use base rates/reference classes before assigning probabilities. Do not manufacture confidence scores or Bayesian posterior numbers without data and calibration.
5. Decide: PASS / WATCH / RESEARCHING / READY. READY requires evidence-backed thesis, counterthesis, invalidation triggers, liquidity/exit assessment, and an explicit cost-aware next action. Evidence missing => RESEARCHING or lower.
6. Log hypothesis, primary tool selected, supporting tools, evidence references, baseline timestamp, decision, predicted observable outcomes at +1d/+3d/+7d, and subsequent realized results. No hindsight edits; append revisions.
7. Send alerts **only for NEW FACT / DELTA / ACTION CHANGE** when the finding materially changes ranking, readiness, net expected benefit, or risk. Never present an alert as a direct instruction to buy.
8. Human explicit approval is always required for any real trade; read-only research must not place orders or sign transactions.

## Separation of responsibilities
- L1 Reasoning: Wan Weigang thinking skill. Questions, falsification, opportunity cost, updates.
- L2 Data: multi-chain facts and provenance; no opinions masquerading as observations.
- L3 Domain/Agent: Crypto Market Skill v4.3 plus structured research and scenario comparison.
- L4 Product: Market OS / Radar / decision record and review.
No arbitrary score is a trading signal. Capital deployment must be risk-bounded and manually authorized.

## Engineering change policy
- Preserve existing scanner/Radar behavior unless a task explicitly requests changes.
- Changes to scoring/gates require tests on historical events, missing-data and identity-collision cases.
- Record false positives and missed discoveries; compare against BTC and relevant reference class.
- Avoid information overload: final daily output answers capital flow, dominant trend, and genuinely new opportunities, or explicitly says 'no validated change'.

Full integration protocol: `docs/cognitive-foundation.md`.

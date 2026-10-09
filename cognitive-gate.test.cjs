"use strict";
const assert = require("node:assert/strict");
const { evaluateResearchGate } = require("./cognitive-gate");

const base = {
  state: "READY",
  identity: { chain: "solana", contract: "example-contract", verified: true },
  execution: { liquidity_verified: true, exit_route_verified: true, slippage_estimate: 0.01 },
  invalidation: ["No recurring buyers within 7 days"],
  thesis: "Incremental buyers are increasing",
  counterthesis: "Observed buyers are wash volume",
  facts: [{ statement: "Verified test evidence", source: "test-fixture", observed_at: "2026-10-09T00:00:00Z" }],
  reasoning: { primary_tool: "reference class" },
  reference_class: { definition: "comparable newly listed tokens", sample_size: 100 },
  business: { competition: "named alternative", genuine_usage: "measured users", marginal_buyers: "measured unique buyers" },
  manual_trade_approval: false
};
const good = evaluateResearchGate(base);
assert.equal(good.state, "READY");
assert.equal(good.ready_eligible, true);
assert.equal(good.trade_execution_authorized, false);

for (const [field, update, expected] of [
  ["identity", { verified: false }, "IDENTITY_UNVERIFIED"],
  ["execution", { liquidity_verified: false }, "EXIT_UNVERIFIED"],
  ["execution", { slippage_estimate: null }, "EXECUTION_COST_MISSING"]
]) {
  const v = { ...base, [field]: { ...base[field], ...update } };
  const result = evaluateResearchGate(v);
  assert.equal(result.state, "RESEARCHING");
  assert.ok(result.reasons.includes(expected));
}
const missing = evaluateResearchGate({ state: "READY" });
assert.equal(missing.state, "RESEARCHING");
assert.ok(missing.reasons.length >= 5);
assert.equal(evaluateResearchGate({ state: "WATCH" }).state, "WATCH");
assert.throws(() => evaluateResearchGate(null), TypeError);
console.log("Cognitive gate: 7 assertions groups passed");

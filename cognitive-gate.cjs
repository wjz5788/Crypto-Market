"use strict";

/**
 * Pure decision gate for Radar research records. Does NOT execute trades.
 * Non-ready states remain under upstream scanner ownership.
 */
const STATES = new Set(["PASS", "WATCH", "RESEARCHING", "READY"]);

function evaluateResearchGate(record) {
  if (!record || typeof record !== "object" || Array.isArray(record)) {
    throw new TypeError("record must be an object");
  }
  const reasons = [];
  const identity = record.identity || {};
  const execution = record.execution || {};
  const reasoning = record.reasoning || {};
  const facts = Array.isArray(record.facts) ? record.facts : [];
  const invalidation = Array.isArray(record.invalidation) ? record.invalidation : [];
  const referenceClass = record.reference_class || {};

  if (!identity.chain || !identity.contract || identity.verified !== true) reasons.push("IDENTITY_UNVERIFIED");
  if (execution.liquidity_verified !== true || execution.exit_route_verified !== true) reasons.push("EXIT_UNVERIFIED");
  if (typeof execution.slippage_estimate !== "number" || !Number.isFinite(execution.slippage_estimate) || execution.slippage_estimate < 0) reasons.push("EXECUTION_COST_MISSING");
  if (invalidation.filter(x => typeof x === "string" && x.trim()).length === 0) reasons.push("INVALIDATION_MISSING");
  if (!record.thesis || typeof record.thesis !== "string" || !record.thesis.trim()) reasons.push("THESIS_MISSING");
  if (!record.counterthesis || typeof record.counterthesis !== "string" || !record.counterthesis.trim()) reasons.push("COUNTERTHESIS_MISSING");
  if (!facts.some(f => f && f.source && f.statement && f.observed_at)) reasons.push("EVIDENCE_MISSING");
  if (!reasoning.primary_tool || !String(reasoning.primary_tool).trim()) reasons.push("REASONING_TOOL_MISSING");
  if (!referenceClass.definition || !Number.isInteger(referenceClass.sample_size) || referenceClass.sample_size <= 0) reasons.push("BASE_RATE_MISSING");
  if (!record.business || !record.business.competition || !record.business.genuine_usage || !record.business.marginal_buyers) reasons.push("FUNDAMENTALS_INCOMPLETE");

  const requested = STATES.has(record.state) ? record.state : "RESEARCHING";
  const approved = reasons.length === 0;
  return {
    requested_state: requested,
    state: requested === "READY" && !approved ? "RESEARCHING" : requested,
    ready_eligible: approved,
    reasons,
    manual_trade_approval: record.manual_trade_approval === true,
    trade_execution_authorized: false
  };
}

module.exports = { evaluateResearchGate };

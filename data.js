window.OS_DATA = {
  prices: [
    {symbol:"BTC", id:"bitcoin", role:"BENCHMARK"},
    {symbol:"ETH", id:"ethereum", role:"CORE WATCH"},
    {symbol:"SOL", id:"solana", role:"BETA WATCH"},
    {symbol:"HYPE", id:"hyperliquid", role:"HIGH WATCH"},
    {symbol:"PENDLE", id:"pendle", role:"RESEARCH"},
    {symbol:"JUP", id:"jupiter-exchange-solana", role:"RESEARCH"},
    {symbol:"ENA", id:"ethena", role:"WAIT"}
  ],
  queue: [
    {symbol:"HYPE",status:"WATCH",thesis:"永续交易需求强，价值捕获链条相对清晰。",buyers:"真实交易活动 + 协议价值捕获。",trigger:"下跌后先看拒绝创新低，再看重新站回关键区间。"},
    {symbol:"ETH",status:"WATCH",thesis:"作为核心风险资产，重点看下跌期是否继续保持相对强度。",buyers:"机构资金、链上需求与长期配置。",trigger:"守住近期结构并重新跑赢 BTC。"},
    {symbol:"SOL",status:"WATCH",thesis:"高 Beta 生态资产，适合观察市场恢复时是否领先反弹。",buyers:"生态交易、应用增长和机构资金。",trigger:"形成承接后，相对 BTC 重新转强。"},
    {symbol:"PENDLE",status:"RESEARCH",thesis:"收益交易基础设施具有真实使用场景。",buyers:"收益资产增长 → 市场交易 → 协议费用与 Token 捕获。",trigger:"验证新市场使用量，不因为跌得多直接升级。"},
    {symbol:"JUP",status:"RESEARCH",thesis:"Solana 核心交易入口之一，交易热度上升时获取真实流量。",buyers:"链上交易 → 聚合路由 → 手续费与生态价值。",trigger:"验证交易量恢复以及 Token 净需求传导。"},
    {symbol:"ENA",status:"WAIT",thesis:"收入回购方向值得研究，但供给压力仍需要消化。",buyers:"USDe 规模与协议收入增长后，才可能形成更明确回购需求。",trigger:"先等供给压力释放，再看收入和 USDe 是否继续增长。"}
  ]
};
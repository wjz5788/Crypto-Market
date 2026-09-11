(function(){
const d=window.OS_DATA;
const prices=document.getElementById("prices");
function fmt(v){if(v>=1000)return "$"+v.toLocaleString(undefined,{maximumFractionDigits:2});if(v>=1)return "$"+v.toFixed(2);return "$"+v.toFixed(4)}
prices.innerHTML=d.prices.map(x=>`<div class="card"><div class="cardTop"><span class="symbol">${x.symbol}</span><span class="role">${x.role}</span></div><div class="price">—</div><div class="move">LIVE WHEN AVAILABLE</div></div>`).join("");
const ids=d.prices.map(x=>x.id).join(",");
fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(ids)}&vs_currencies=usd&include_24hr_change=true`)
.then(r=>{if(!r.ok)throw 0;return r.json()}).then(live=>{
prices.innerHTML=d.prices.map(x=>{
const v=live[x.id]||{};const c=typeof v.usd_24h_change==="number"?v.usd_24h_change:null;
return `<div class="card"><div class="cardTop"><span class="symbol">${x.symbol}</span><span class="role">${x.role}</span></div><div class="price">${typeof v.usd==="number"?fmt(v.usd):"—"}</div><div class="move">${c===null?"NO DATA":(c>=0?"+":"")+c.toFixed(1)+"% · 24H"}</div></div>`
}).join("")
}).catch(()=>{});
const cls=s=>s==="WATCH"?"watch":s==="RESEARCH"?"research":"wait";
document.getElementById("queueRows").innerHTML=d.queue.map(x=>`<div class="queueRow"><div class="sym">${x.symbol}</div><div class="status ${cls(x.status)}">${x.status}</div><div class="q"><small>核心逻辑</small><p>${x.thesis}</p></div><div class="q"><small>买家路径</small><p>${x.buyers}</p></div><div class="q"><small>升级触发</small><p>${x.trigger}</p></div></div>`).join("");
})();
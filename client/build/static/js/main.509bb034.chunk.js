(this["webpackJsonptwitter-stocks"]=this["webpackJsonptwitter-stocks"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n.n(c),i=n(15),o=n.n(i),j=(n(24),n(11)),s=n.n(j),l=n(16),u=n(13),b=(n(26),n(27),n(4)),d=n(18),a=n(6),h=n(19),O=n(12),x=n(3);a.b.add(h.a,O.a,O.b);var f=function(e){var t=e.tweets;return Object(x.jsx)("div",{children:t.map((function(e){return Object(x.jsx)(k,{tweet:e},e.id)}))})},k=function(e){var t=e.tweet;return Object(x.jsx)(b.a,{style:{backgroundColor:"##F0F0F0"},children:Object(x.jsxs)(b.h,{children:[Object(x.jsx)(b.h.Item,{align:"left",children:Object(x.jsx)(b.g.Container,{size:64,children:Object(x.jsx)(d.a,{icon:["fab","twitter-square"],fontSize:"50px"})})}),Object(x.jsx)(b.h.Item,{children:Object(x.jsx)(b.d,{children:Object(x.jsx)("p",{children:t.text})})})]})})},A=function(){var e=Object(c.useState)("AAPL"),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)({data:[]}),o=Object(u.a)(i,2),j=o[0],d=o[1],a="http://localhost:8081/stocks/"+n;return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:if((t=e.sent).ok){e.next=5;break}throw t;case 5:return e.next=7,t.json();case 7:n=e.sent,d(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),j.data?Object(x.jsx)("div",{style:{backgroundColor:"#1DA1F2"},children:Object(x.jsxs)(b.c,{fluid:!0,children:[Object(x.jsxs)(b.e,{style:{marginTop:"30px",marginBottom:"30px",left:"45%"},children:[Object(x.jsx)(b.e.Trigger,{children:Object(x.jsx)(b.b,{style:{backgroundColor:"#657786"},children:Object(x.jsxs)("span",{style:{color:"white",fontSize:"35px"},children:["$",n]})})}),Object(x.jsx)(b.e.Menu,{children:Object(x.jsxs)(b.e.Content,{children:[Object(x.jsx)(b.e.Item,{onClick:function(){return r("AAPL")},children:"AAPL"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("ABNB")},children:"ABNB"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("ADBE")},children:"ADBE"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("ALK")},children:"ALK"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("AMZN")},children:"AMZN"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("BABA")},children:"BABA"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("BMBL")},children:"BMBL"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("DIS")},children:"DIS"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("EBAY")},children:"EBAY"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("FB")},children:"FB"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("GOOG")},children:"GOOG"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("MSFT")},children:"MSFT"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("NASDAQ")},children:"NASDAQ"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("NFLX")},children:"NFLX"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("NVDA")},children:"NVDA"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("PAYPL")},children:"PYPL"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("QQQ")},children:"QQQ"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("TGT")},children:"TGT"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("TSLA")},children:"TSLA"}),Object(x.jsx)(b.e.Item,{onClick:function(){return r("UPS")},children:"UPS"})]})})]}),Object(x.jsx)(f,{tweets:j.data}),Object(x.jsx)(b.f,{style:{backgroundColor:"#1DA1F2"}})]})}):Object(x.jsx)("div",{children:"Loading..."})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root")),m()}},[[38,1,2]]]);
//# sourceMappingURL=main.509bb034.chunk.js.map
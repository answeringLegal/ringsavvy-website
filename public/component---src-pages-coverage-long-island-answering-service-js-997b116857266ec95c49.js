(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2H/W":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("G7fN"),i=n("xlbW"),l=n("P076"),s=n("LxTm"),c=n("vOnD"),u=n("Wbzz"),d=Object(c.default)(u.a).withConfig({displayName:"style__ValueLink",componentId:"eoawxa-0"})(["color:",";display:block;font-family:",";font-size:",";font-weight:700;margin-bottom:1em;",""],(function(e){return e.theme.global.colors.black}),(function(e){return e.theme.global.fonts.serif}),(function(e){return e.theme.global.fontSizes.lg}),(function(e){return e.isLink&&Object(c.css)(["color:",";font-size:",";text-decoration:none;",""],(function(e){return e.theme.global.colors.primary}),(function(e){return e.theme.global.fontSizes.base}),s.g)})),m=function(e){var t=e.value,n=e.isFirst,a=t.heading,o=t.content,i=t.ctaLink;return r.a.createElement(s.f,{isFirst:n},i?r.a.createElement(d,{isLink:!0,to:i},a):r.a.createElement(d,{as:"p"},a),r.a.createElement("p",null,o))};t.a=function(e){var t=e.gridData,n=e.contentData,a=e.horizontal,c=void 0!==a&&a;return r.a.createElement(o.a,null,r.a.createElement(i.a,null,r.a.createElement(l.a,{contentData:n,horizontal:c}),r.a.createElement(s.d,null,t.map((function(e,t){var n=0===t;return r.a.createElement(m,{value:e,key:t,isFirst:n})})))))}},"6Rqd":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("P076"),i=n("vOnD"),l=n("qgsM"),s=n("wEEd"),c=n("FT44"),u=n("tAG7"),d=i.default.ul.withConfig({displayName:"style__AccordionList",componentId:"yfmijc-0"})(["display:none;list-style:none;margin:0;padding:0;width:100%;@media ","{display:block;}"],(function(e){return e.theme.global.mediaQueries.md})),m=i.default.div.withConfig({displayName:"style__AccordionTab",componentId:"yfmijc-1"})(["align-items:center;background:",";border-radius:5px;box-shadow:0 0 15px rgba(0,0,0,0.12);color:#7a7a7a;cursor:pointer;display:flex;font-family:",";font-size:",";font-weight:700;line-height:1.3em;margin:0 0 20px;max-width:480px;padding:1.444444em;transition:all 0.2s;width:100%;"," @media ","{font-size:16px;}"],(function(e){return e.theme.global.colors.white}),(function(e){return e.theme.global.fonts.serif}),(function(e){return e.theme.global.fontSizes.md}),(function(e){return e.isOpen&&Object(i.css)(["background:",";color:",";"],(function(e){return e.theme.global.colors.primary}),(function(e){return e.theme.global.colors.white}))}),(function(e){return e.theme.global.mediaQueries.sm})),f=i.default.article.withConfig({displayName:"accordionItem__AccordionContent",componentId:"sc-5nmp-0"})(["max-width:none;padding:1em 5% 3.25em;width:100%;h4{margin-bottom:1em;}p:last-of-type{margin-bottom:1.625em;}"]),h=function(e){var t=e.tab,n=e.index,o=t.heading,i=t.content,d=t.ctaText,h=t.ctaLink,p=Object(a.useState)(t[0]),g=p[0],y=p[1],v=Object(l.a)(),w=v[0],b=v[1],E=Object(s.b)({overflow:"hidden",height:g?b.height+b.top+52:0,transform:g?"translate3d(0, 0, 0)":"translate3d(0, -20px, 0)"});return r.a.createElement("li",null,r.a.createElement(m,{onClick:function(){return y(!g)},isOpen:g},r.a.createElement(u.a,null,"0",n+1),o),r.a.createElement(s.a.div,{style:E},r.a.createElement(f,w,r.a.createElement("h4",null,o),i.length>1&&Array.isArray(i)?i.map((function(e,t){return r.a.createElement("p",{key:t},e)})):r.a.createElement("p",null,i),h&&d?r.a.createElement(c.a,{to:h},d):null)))},p=function(e){var t=e.tabData;return r.a.createElement(d,null,t.map((function(e,t){return r.a.createElement(h,{tab:e,index:t,key:t})})))},g=n("G7fN"),y=n("xlbW"),v=n("LxTm");t.a=function(e){var t=e.tabData,n=e.contentData,i=e.horizontal,l=void 0!==i&&i,s=e.primary,d=void 0!==s&&s,m=Object(a.useState)(t[0]),f=m[0],h=m[1];return r.a.createElement(g.a,null,r.a.createElement(y.a,null,r.a.createElement(o.a,{contentData:n,horizontal:l,primary:d}),r.a.createElement(v.d,{alignCenter:!0},r.a.createElement(u.d,null,t.map((function(e,t){return r.a.createElement(u.b,{key:t,isActive:f===e,onClick:function(){return h(e)},title:e.heading},r.a.createElement(u.a,null,"0",t+1),e.heading)}))),r.a.createElement(u.c,null,r.a.createElement("h4",null,f.heading),f.content.length>1&&Array.isArray(f.content)?f.content.map((function(e,t){return r.a.createElement("p",{key:t},e)})):r.a.createElement("p",null,f.content),f.ctaLink&&f.ctaText?r.a.createElement(c.a,{to:f.ctaLink},f.ctaText):null)),r.a.createElement(p,{tabData:t})))}},"8j/b":function(e,t,n){e.exports=n.p+"static/corporate-office-bg-overlay-cb598170e2fa93d81c414e31aa9acbab.jpg"},HG2X:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("xlbW"),i=n("G7fN"),l=n("ZfCq"),s=n("vOnD"),c=n("LxTm"),u=Object(s.default)(i.a).withConfig({displayName:"style__SectionWithBG",componentId:"sc-1uedj5w-0"})(["margin:60px 0;",""],c.h);t.a=function(){return r.a.createElement(u,null,r.a.createElement(o.a,null,r.a.createElement(l.a,null)))}},ZfCq:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("kD0k"),r=n.n(a);n("ls82");function o(e,t,n,a,r,o,i){try{var l=e[o](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,r)}var i=n("9Hrx"),l=n("q1tI"),s=n.n(l),c=n("8CCW"),u=n.n(c),d=n("1S24"),m=n("vOnD"),f=n("8j/b"),h=n.n(f),p=m.default.div.withConfig({displayName:"style__EmailCTA",componentId:"sc-1coqjzb-0"})(["position:relative;flex-wrap:wrap;padding:2.5rem 3rem;display:flex;align-items:center;background-repeat:no-repeat;background-size:cover;border-radius:5px;box-shadow:0 5px 15px rgba(0,0,0,0.16);background-image:url(",");&::before{border-radius:5px;content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(39,39,39,0.86);}@media (max-width:767px){padding:1rem 1rem;}"],h.a),g=m.default.div.withConfig({displayName:"style__HalfWrapper",componentId:"sc-1coqjzb-1"})(["color:white;position:relative;width:50%;h3{margin:0 0 0.5rem;color:white;}p{color:white;margin:0;}@media (max-width:767px){width:100%;margin-bottom:10px;text-align:center;h2{font-size:1.5rem;}}"]),y=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t;u()("#formEmbed",d.d,{done:(e=r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.getElementById("field82569298");case 2:e.sent.setAttribute("placeholder","Email Address");case 4:case"end":return e.stop()}}),e)})),t=function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function l(e){o(i,a,r,l,s,"next",e)}function s(e){o(i,a,r,l,s,"throw",e)}l(void 0)}))},function(){return t.apply(this,arguments)})})},n.render=function(){return s.a.createElement(p,null,s.a.createElement(g,null,s.a.createElement("h3",null,"Want to revisit this later?"),s.a.createElement("p",null,"Let us send you our company brochure.")),s.a.createElement(g,{className:"pdf-form"},s.a.createElement("div",{id:"formEmbed"})))},t}(l.Component)},iHRm:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n("q1tI"),r=n.n(a),o=n("qhky"),i=n("I/Ru"),l=n("0YEp"),s=n("6Rqd"),c=n("TEwX"),u=n("jhR2"),d=n("HG2X"),m=n("2H/W");function f(e){var t=e.location,n=[{id:1,heading:"Looking for a Long Island Answering Service?",content:"Meet the Ring Savvy team! Our team of virtual receptionists provides superior phone answering services to hundreds of businesses across the country, including overflow call handling, live call transferring, and new customer intake. Perhaps the best part about our service is that you don’t have to be on Long Island to use it."},{id:2,heading:"What makes Ring Savvy a Long Island Answering Service?",content:["Well our one and only call center is located in Long Island, New York. Our company was founded on Long Island in 2013, and has remained there ever since. In addition, Ring Savvy’s entire staff is made up of Long Island residents. Our CEO, managers, sales staff, marketing team, and our virtual receptionists, all live just minutes away from our call center location.","Why should any of this matter to you? Because having our entire Ring Savvy team located in one place allows us to provide business owners with the very best phone answering coverage. Here’s how:"]},{id:3,heading:"Why Ring Savvy is the best answering service for you",content:["Ring Savvy will serve as the ultimate lead capturing safety net for your business. Never again will you miss out on a potential customer, because you failed to provide them with a live voice or offered subpar phone answering assistance.","Our receptionists will act as a representative of your business, letting your caller know who they have called, and taking all first time callers to your business through your personal new customer intake process."]}];return r.a.createElement(i.a,{location:t},r.a.createElement(o.a,null,r.a.createElement("title",null,"Long Island Answering Service | Need an Answering Service on LI?"),r.a.createElement("meta",{name:"description",content:"Long Island Answering Service | Need an Answering Service on LI? Choose Ring Savvy | 24/7 Virtual Receptionists, Customizable Features. Try Free For 7 Days!"})),r.a.createElement(l.a,{heading:"Long Island Answering Service"}),r.a.createElement(m.a,{contentData:n.find((function(e){return 1===e.id})),gridData:[{heading:"State of the art call forwarding",content:"Choose when you’d like to answer calls for your business, and when you’d like calls to be automatically forwarded to our team.",ctaLink:"/services/overflow-call-handling/"},{heading:"Customizable to fit your business",content:"Personalize everything from the questions we ask first-time callers to your company, to the way we go about transferring your calls.",ctaLink:"/services/overflow-call-handling/"},{heading:"Always live, 24/7/365",content:"Our call center is always up and running, and fully staffed with both English and Spanish speaking receptionists. We don’t even take holidays off.",ctaLink:"/services/overflow-call-handling/"}]}),r.a.createElement(d.a,null),r.a.createElement(s.a,{contentData:n.find((function(e){return 2===e.id})),tabData:[{heading:"We never outsource calls",content:["If you’re using our Long Island Answering Service, a virtual receptionist from our call center will always be handling your calls.","This allows us to closely monitor the performance of our virtual receptionists on the phone, and ensure that they’re always meeting Ring Savvy’s high call handling standards."]},{heading:"Our phone answering staff is elite",content:["All of our virtual receptionist team members have been carefully vetted by our managing staff and have gone through months of phone answering training before being allowed to answer calls on behalf of your business.","This once again guarantees that the receptionist service you get from Ring Savvy is of the highest quality."]},{heading:"Our team never stops working",content:["Having just one call center location allows us to carefully monitor our phone systems, and keep technical issues to a minimum.","Even when your business experiences phone outages during inclement weather, you can expect our Long Island Answering Service to stay up and running, answering customer calls on your behalf."]}],horizontal:!0}),r.a.createElement(c.a,null),r.a.createElement(u.a,{contentData:n.find((function(e){return 3===e.id}))}))}},jhR2:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),i=n("P076"),l=n("G7fN"),s=n("xlbW"),c=n("LxTm"),u=n("FT44"),d=function(e){var t=e.data,n=t.heading,a=t.content,o=t.ctaLink,i=t.ctaText;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,n),a.length>1&&Array.isArray(a)?a.map((function(e,t){return r.a.createElement("p",{key:t},e)})):r.a.createElement("p",null,a),r.a.createElement(u.a,{to:o},i))},m=n("qgsM"),f=n("wEEd"),h=n("vOnD"),p=n("tAG7"),g=Object(h.default)(p.c).withConfig({displayName:"style__Cta",componentId:"p6k0o0-0"})(["display:block;flex-wrap:wrap;margin:0 auto 0 0;max-width:430px;position:relative;top:32px;"]),y=h.default.ul.withConfig({displayName:"style__FaqList",componentId:"p6k0o0-1"})(["display:block;list-style:none;margin:0;padding:0;width:49%;@media ","{width:100%;}"],(function(e){return e.theme.global.mediaQueries.md})),v=h.default.li.withConfig({displayName:"style__Faq",componentId:"p6k0o0-2"})(["align-items:center;background:",";border-radius:5px;box-shadow:0 0 15px rgba(0,0,0,0.12);color:#4d4d4d;cursor:pointer;display:block;font-family:",";font-size:",";font-weight:700;line-height:1.3em;margin:0 0 20px;max-width:480px;padding:1.444444em;transition:all 0.2s;user-select:none;width:100%;&:before{position:absolute;content:'","';color:#0abe51;right:40px;font-size:32px;}&:hover{box-shadow:0 0 12px rgba(0,0,0,0.12);}"],(function(e){return e.theme.global.colors.white}),(function(e){return e.theme.global.fonts.serif}),(function(e){return e.theme.global.fontSizes.base}),(function(e){return e.isOpen?"-":"+"})),w=h.default.div.withConfig({displayName:"style__FaqAnswer",componentId:"p6k0o0-3"})(["color:#666;font-family:'Open Sans',sans-serif;font-size:0.9em;font-weight:normal;padding:0.83333em 0 0 0;p{margin:0;}"]),b=function(e){var t=e.faq,n=(e.index,t.question),o=t.answer,i=Object(a.useState)(!1),l=i[0],s=i[1],c=Object(m.a)(),u=c[0],d=c[1],h=d.height,p=d.top,g=Object(f.b)({overflow:"hidden",height:l?h+p:0,transform:l?"translate3d(0, 0, 0)":"translate3d(0, -10px, 0)"});return r.a.createElement(v,{onClick:function(){return s(!l)},isOpen:l},n,r.a.createElement(f.a.div,{style:g},r.a.createElement(w,u,o.length>1&&Array.isArray(o)?o.map((function(e,t){return r.a.createElement("p",{key:t},e)})):r.a.createElement("p",null,o))))};t.a=function(e){var t=e.contentData,n=e.horizontal,a=void 0!==n&&n,u=e.primary,m=void 0!==u&&u;return r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement(i.a,{contentData:t,horizontal:a,primary:m}),r.a.createElement(c.d,null,r.a.createElement(g,null,r.a.createElement(d,{data:{heading:"Try Ring Savvy free for 7 days",content:["Experience all our phone answering service has to offer without any risk or financial commitment.","All business owners are given the opportunity to test out our receptionist team for over a week, and see for themselves whether or not Ring Savvy will be beneficial to their business."],ctaText:"Get started",ctaLink:"/sign-up/"}})),r.a.createElement(y,null,[{question:"What happens during my free trial?",answer:"During your free trial period, you’ll have access to just about all of our features, allowing you to take in the full Ring Savvy experience. The only feature we don’t offer to those in trial is appointment scheduling."},{question:"Do I need to put a credit card down?",answer:"Not until your free trial concludes. We’ll only need your credit card information if you choose to become a Ring Savvy customer."},{question:"How long will it take to set up my free trial?",answer:"Make sure new leads that come in during the overnight and weekends never pass you by."},{question:"What happens at the end of my free trial?",answer:"A member of our team will reach out to you and go over the results of your trial period. If you’d like to continue using our service, we’ll get you started right away as a paying customer. If you decide the service is not for you, you can walk away at no cost."}].map((function(e,t){return r.a.createElement(b,{faq:e,index:t,key:t})})),r.a.createElement(o.a,{to:"/faqs/"},"Read more FAQs")))))}},kD0k:function(e,t,n){e.exports=n("ls82")}}]);
//# sourceMappingURL=component---src-pages-coverage-long-island-answering-service-js-997b116857266ec95c49.js.map
function e(e){return e&&e.__esModule?e.default:e}function o(e,o,n,t){Object.defineProperty(e,o,{get:n,set:t,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire344c;n.register("kBpn4",(function(t,r){var s;s=t.exports,Object.defineProperty(s,"__esModule",{value:!0,configurable:!0}),o(t.exports,"default",(()=>b));var l=n("f2jpS"),i=n("49uSp"),c=n("16H8x"),a=n("1KZzU"),d=n("8pd89"),u=n("6jYnC"),f=n("edJOl"),x=n("5g9iF"),g=n("8RMqT");const p=(0,d.makeStyles)({background:{backgroundColor:a.tokens.colorNeutralBackground2},secondaryText:{color:a.tokens.colorNeutralForeground4}});function b(){const o=p(),{userInfo:n}=(0,i.useContext)(f.UserInfoContext),t=window.location.origin+"/",r=(0,i.useCallback)((()=>{u.default.open(u.Page.Settings).catch((e=>console.error(e)))}),[]),s=(0,i.useCallback)((()=>{u.default.logout({redirectURI:t}).catch((e=>console.error(e)))}),[t]);var a;const b=null!==(a=null==n?void 0:n.email)&&void 0!==a?a:"-";var h;const v=null!==(h=null==n?void 0:n.sub)&&void 0!==h?h:"-";return(0,l.jsx)("div",{className:e(c)(o.background,e(g).root),children:(0,l.jsxs)("div",{className:e(g).content,children:[(0,l.jsx)(d.Text,{block:!0,as:"h1",size:400,children:"Welcome!"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(d.Text,{block:!0,as:"p",size:500,weight:"semibold",children:b}),(0,l.jsx)(d.Text,{className:o.secondaryText,block:!0,as:"p",size:200,children:v})]}),(0,l.jsxs)("div",{className:e(g).buttons,children:[(0,l.jsx)(d.Button,{appearance:"primary",onClick:r,children:"Profile and Account Settings"}),(0,l.jsx)(d.Button,{appearance:"secondary",onClick:s,children:"Sign out"})]}),(0,l.jsxs)("div",{className:e(g).footer,children:[(0,l.jsx)(d.Text,{size:200,children:"Powered by"}),(0,l.jsx)(d.Image,{src:e(x)})]})]})})}})),n.register("5g9iF",(function(e,o){e.exports=n("i28il").getBundleURL("gOaks")+n("iQuBN").resolve("6hwoV")})),n.register("8RMqT",(function(e,n){var t,r,s,l;o(e.exports,"footer",(()=>t),(e=>t=e)),o(e.exports,"buttons",(()=>r),(e=>r=e)),o(e.exports,"content",(()=>s),(e=>s=e)),o(e.exports,"root",(()=>l),(e=>l=e)),t="iRXfBG_footer",r="iRXfBG_buttons",s="iRXfBG_content",l="iRXfBG_root"}));
//# sourceMappingURL=Root.f3650593.js.map
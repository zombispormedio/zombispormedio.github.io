(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{161:function(e,a,t){"use strict";var n=t(172),r=t(0),l=t.n(r),i=t(4),c=t.n(i),o=t(173),m=t.n(o),h=t(162),s=function(e){var a=e.subtitle,t=e.fixedTitle;return l.a.createElement(h.StaticQuery,{query:"2539889707",render:function(e){var n=e.site.siteMetadata,r=n.title,i=n.author,c=n.description,o=n.keywords,h=n.twitterAccount,s=n.siteUrl,u=n.image,d=i+" - "+r,p=a?i+" - "+a:d;return l.a.createElement(m.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("title",null,t||p),l.a.createElement("link",{rel:"author",href:"humans.txt"}),l.a.createElement("meta",{name:"description",content:c}),l.a.createElement("meta",{name:"keywords",content:o.join(",")}),l.a.createElement("meta",{name:"author",content:i}),l.a.createElement("meta",{name:"image",content:u}),l.a.createElement("meta",{itemProp:"name",content:p}),l.a.createElement("meta",{itemProp:"image",content:u}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),l.a.createElement("meta",{name:"twitter:title",content:p}),l.a.createElement("meta",{name:"twitter:site",content:h}),l.a.createElement("meta",{name:"twitter:creator",content:h}),l.a.createElement("meta",{name:"twitter:image:src",content:u}),l.a.createElement("meta",{name:"og:title",content:p}),l.a.createElement("meta",{name:"og:image",content:u}),l.a.createElement("meta",{name:"og:url",content:s}),l.a.createElement("meta",{name:"og:site_name",content:d}),l.a.createElement("meta",{name:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:locale",content:"en_US"}),l.a.createElement("link",{rel:"preconnect",href:"https://www.google-analytics.com"}))},data:n})};s.defaultProps={subtitle:null,fixedTitle:null},s.propTypes={subtitle:c.a.string,fixedTitle:c.a.string};var u=t(84),d=t(163),p=(t(38),t(52),t(159)),v=Object(p.a)("nav",{target:"e20f87y0"})("label:desktop-nav;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;",d.a.mobile,"{display:none;}"),f=Object(p.a)(h.Link,{target:"e20f87y1"})("font-size:1.05rem;font-weight:500;padding:1rem;"),g=function(e){var a=e.className,t=e.items;return l.a.createElement(v,{className:Object(u.cx)(a)},t.map(function(e){var a=e.title,t=e.path;return l.a.createElement(f,{key:"$_"+t,to:t},a)}))};g.defaultProps={className:null},g.propTypes={className:c.a.string,items:c.a.arrayOf(c.a.shape({title:c.a.string,path:c.a.string})).isRequired};var z=g,b=t(9),y=t.n(b),E=t(167),w=t.n(E),x=t(170),k=t.n(x),C=t(171),j=Object(p.a)("div",{target:"e1x9moom0"})("background-color:transparent;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"),M=w()({path:C.b,size:1.5})(Object(p.a)(k.a,{target:"e1x9moom1"})("path{fill:rgb(255,255,255);}&:hover{path{fill:rgba(255,255,255,0.5);}}")),O=function(e){var a=e.onClick;return l.a.createElement(j,{onClick:a},l.a.createElement(M,null))};O.defaultProps={onClick:function(){}},O.propTypes={onClick:c.a.func};var T=O,q=t(188),H=Object(p.a)("div",{target:"e1bhoxa70"})("background-color:transparent;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"),S=w()({path:C.a,size:1.5})(Object(p.a)(k.a,{target:"e1bhoxa71"})("path{fill:rgb(0,0,0);}&:hover{path{fill:rgba(0,0,0,0.5);}}")),A=function(e){var a=e.onClick,t=e.className;return l.a.createElement(H,{onClick:a,className:t},l.a.createElement(S,null))};A.defaultProps={onClick:function(){},className:""},A.propTypes={onClick:c.a.func,className:c.a.string};var P=A,N=Object(p.a)("div",{target:"e59zvgp0"})("lable:popup;position:absolute;border-radius:4px;background-color:#fff;left:0;top:0;right:0;margin:1rem;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:all 0.3s cubic-bezier(0.25,0.8,0.25,1);display:flex;flex-direction:column;color:",function(e){return e.theme.colorTextPrimary},";padding-bottom:2rem;"),L=Object(p.a)("div",{target:"e59zvgp1"})("label:links-container;display:flex;flex-direction:column;"),R=Object(p.a)(h.Link,{target:"e59zvgp2"})("font-size:1.05rem;font-weight:500;padding:1rem;width:100%;text-align:center;&:focus{background-color:rgba(0,0,0,0.2);}"),F=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).handleClickOutside=function(){(0,a.props.onClose)()},a}return y()(a,e),a.prototype.render=function(){var e=this.props,a=e.onClose,t=e.items;return l.a.createElement(N,null,l.a.createElement(P,{className:Object(u.css)("align-self:flex-end;"),onClick:a}),l.a.createElement(L,null,t.map(function(e){var a=e.title,t=e.path;return l.a.createElement(R,{key:"$_"+t,to:t},a)})))},a}(r.Component);F.propTypes={onClose:c.a.func.isRequired,items:c.a.arrayOf(c.a.shape({title:c.a.string,path:c.a.string})).isRequired};var V=Object(q.a)(F),B=Object(p.a)("div",{target:"e1ch88sv0"})("label:mobile-nav;display:none;",d.a.mobile,"{display:block;}"),D=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={showMenu:!1},a.onMenuButtonClick=function(){a.setState(function(e){return{showMenu:!e.showMenu}})},a.onCloseMenu=function(){a.setState({showMenu:!1})},a}return y()(a,e),a.prototype.render=function(){var e=this.state.showMenu,a=this.props.items;return l.a.createElement(B,null,l.a.createElement(T,{onClick:this.onMenuButtonClick}),e&&l.a.createElement(V,{onClose:this.onCloseMenu,items:a}))},a}(r.Component);D.propTypes={items:c.a.arrayOf(c.a.shape({title:c.a.string,path:c.a.string})).isRequired};var G=D,Q=[{path:"/summary",title:"Summary"},{path:"/faq",title:"F.A.Q."},{path:"/projects",title:"Projects"},{path:"/writings",title:"Writings"}],U=function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(z,Object.assign({items:Q},e)),l.a.createElement(G,Object.assign({items:Q},e)))},_=Object(p.a)("header",{target:"e4nvdh20"})("width:100%;position:absolute;z-index:500;perspective:2000px;color:",function(e){return e.theme.colorTextSecondary},";padding:1rem;display:flex;justify-content:space-between;"),I=Object(p.a)(h.Link,{target:"ecwzpzf0"})("display:flex;align-items:center;justify-items:center;font-size:2rem;z-index:10;text-decoration:none;span{transition:all 0.2s ease-in-out;&:hover{transform:scale(1.5);}}"),J=function(e){var a=e.className;return l.a.createElement(I,{className:Object(u.cx)(a),to:"/"},l.a.createElement("span",{role:"img","aria-label":"idea emoji"},"💡"))};J.defaultProps={className:null},J.propTypes={className:c.a.string};var X=J,$=function(){return l.a.createElement(_,null,l.a.createElement(X,{className:Object(u.css)("margin-left:1rem;flex-grow:1;",d.a.mobile,"{visibility:hidden;}")}),l.a.createElement(U,{className:Object(u.css)("margin-right:1rem;flex-grow:1;")}))},W=Object(p.a)("img",{target:"eiazdqp0"})("width:10rem;border-radius:10rem;"),Z=Object(p.a)("div",{target:"e1666iqq0"})("height:100vh;background-color:",function(e){return e.theme.colorAccent},';background-image:url("',function(e){return e.source},'");'),K=Object(p.a)("div",{target:"e1ucvj9j0"})("display:flex;flex-direction:column;justify-content:center;align-items:center;color:",function(e){return e.theme.colorTextSecondary},";width:100%;height:100%;background-color:rgba(0,0,0,0.2);text-align:center;padding-left:1rem;padding-right:1rem;"),Y=function(){return l.a.createElement(Z,{source:"\ndata:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\n"},l.a.createElement(K,null,l.a.createElement(W,{src:"/original.jpg"}),l.a.createElement("h1",null,"Hi! I'm Xavier Serrano"),l.a.createElement("h3",null,l.a.createElement("span",{role:"img","aria-label":"random"},"🔀")," ","Developer"),l.a.createElement("p",null,"Javascript, Scala, Android, Elixir and Golang")))};t.d(a,"b",function(){return s}),t.d(a,"c",function(){return $}),t.d(a,"a",function(){return Y})},162:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return v}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(160),o=t.n(c);t.d(a,"Link",function(){return o.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var m=t(36);t.d(a,"waitForRouteChange",function(){return m.c});var h=t(166),s=t.n(h);t.d(a,"PageRenderer",function(){return s.a});var u=t(50);t.d(a,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},163:function(e,a,t){"use strict";t(38);var n=t(0),r=t.n(n),l=t(183),i={mobile:"\n    @media only screen \n    and (min-device-width : 320px) \n    and (max-device-width : 480px)\n    ",tablet:"\n    @media only screen \n    and (min-device-width : 768px) \n    and (max-device-width : 1024px)\n    ",desktop:"\n    @media only screen \n    and (min-width : 670px)\n    "};t.d(a,"b",function(){return o}),t.d(a,"a",function(){return i});var c=Object.assign({},{colorPrimary:"#98CDDB",colorSecondary:"#FC6242",colorAccent:"#663399",colorLight:"#4CECF0",colorBackground:"#fff",colorTextPrimary:"#000",colorTextSecondary:"#fff"}),o=function(e){return function(){return r.a.createElement(l.a,{theme:c},r.a.createElement(e,null))}}},166:function(e,a,t){var n;e.exports=(n=t(182))&&n.default||n},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Full-Stack 💻 | Devices 📱 | Data 💡",author:"Xavier Serrano",description:"Motivated Software Engineer. Tech-lover and Full Stack and Mobile developer. I highlight my passion for building apps and make users happy.",keywords:["software engineer","full-stack developer","javascript","golang","java","android","data","user experience"],twitterAccount:"@Zombispormedio",siteUrl:"https://zombispormedio.github.io",image:"https://zombispormedio.github.io/screenshot.png"}}}}},182:function(e,a,t){"use strict";t.r(a);t(38);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(77),o=t(1),m=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({key:a.pathname,location:a,pageResources:t},t.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=m}}]);
//# sourceMappingURL=1-279a659384f4d65bac47.js.map
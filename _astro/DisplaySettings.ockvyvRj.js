import{S as L,i as M,s as Q,a as K,c as W,e as _,t as O,b as C,d as v,f as m,g as P,h as T,j as p,k as s,l as H,m as X,n as Y,o as i,p as R,q,u as Z,r as ee,v as te,w as se,x as ae,y as le,z as re,A as oe}from"./translation.Cj0Okkzk.js";import{I as F}from"./zh_TW.Cn8XYgkS.js";import{g as ne,a as G,s as ie}from"./setting-utils.H_x_02w0.js";const ue=e=>({}),J=e=>({});function ce(e){let a,t,l,r,o,c,n,d,b,f,u,h,g,k,x,$,y,w=K(F.themeColor)+"";const I=e[4]["restore-icon"],D=W(I,e,e[3],J);return{c(){a=_("div"),t=_("div"),l=_("div"),r=O(w),o=C(),c=_("button"),n=_("div"),D&&D.c(),d=C(),b=_("div"),f=_("div"),u=O(e[0]),h=C(),g=_("div"),k=_("input"),this.h()},l(s){a=v(s,"DIV",{id:!0,class:!0});var i=m(a);t=v(i,"DIV",{class:!0});var x=m(t);l=v(x,"DIV",{class:!0});var _=m(l);r=P(_,w),o=T(_),c=v(_,"BUTTON",{"aria-label":!0,class:!0});var $=m(c);n=v($,"DIV",{class:!0});var y=m(n);D&&D.l(y),y.forEach(p),$.forEach(p),_.forEach(p),d=T(x),b=v(x,"DIV",{class:!0});var I=m(b);f=v(I,"DIV",{id:!0,class:!0});var C=m(f);u=P(C,e[0]),C.forEach(p),I.forEach(p),x.forEach(p),h=T(i),g=v(i,"DIV",{class:!0});var E=m(g);k=v(E,"INPUT",{"aria-label":!0,type:!0,min:!0,max:!0,class:!0,id:!0,step:!0,style:!0}),E.forEach(p),i.forEach(p),this.h()},h(){s(n,"class","text-[var(--btn-content)] svelte-3akcb9"),s(c,"aria-label","Reset to Default"),s(c,"class","btn-regular w-7 h-7 rounded-md active:scale-90 svelte-3akcb9"),H(c,"opacity-0",e[0]===e[1]),H(c,"pointer-events-none",e[0]===e[1]),s(l,"class","flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3 before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)] before:absolute before:-left-3 before:top-[0.33rem] svelte-3akcb9"),s(f,"id","hueValue"),s(f,"class","transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center font-bold text-sm items-center text-[var(--btn-content)] svelte-3akcb9"),s(b,"class","flex gap-1 svelte-3akcb9"),s(t,"class","flex flex-row gap-2 mb-3 items-center justify-between svelte-3akcb9"),s(k,"aria-label",K(F.themeColor)),s(k,"type","range"),s(k,"min","0"),s(k,"max","360"),s(k,"class","slider svelte-3akcb9"),s(k,"id","colorSlider"),s(k,"step","5"),X(k,"width","100%"),s(g,"class","w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none svelte-3akcb9"),s(a,"id","display-setting"),s(a,"class","float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4 svelte-3akcb9")},m(s,v){Y(s,a,v),i(a,t),i(t,l),i(l,r),i(l,o),i(l,c),i(c,n),D&&D.m(n,null),i(t,d),i(t,b),i(b,f),i(f,u),i(a,h),i(a,g),i(g,k),R(k,e[0]),x=!0,$||(y=[q(c,"click",e[2]),q(k,"change",e[5]),q(k,"input",e[5])],$=!0)},p(e,[s]){D&&D.p&&(!x||8&s)&&Z(D,I,e,e[3],x?te(I,e[3],s,ue):ee(e[3]),J),(!x||3&s)&&H(c,"opacity-0",e[0]===e[1]),(!x||3&s)&&H(c,"pointer-events-none",e[0]===e[1]),(!x||1&s)&&se(u,e[0]),1&s&&R(k,e[0])},i(e){x||(ae(D,e),x=!0)},o(e){le(D,e),x=!1},d(e){e&&p(a),D&&D.d(e),$=!1,re(y)}}}function de(e,s,a){let{$$slots:t={},$$scope:l}=s,r=ne();const i=G();return e.$$set=e=>{"$$scope"in e&&a(3,l=e.$$scope)},e.$$.update=()=>{1&e.$$.dirty&&(r||0===r)&&ie(r)},[r,i,function(){a(0,r=G())},l,t,function(){r=oe(this.value),a(0,r)}]}class be extends L{constructor(e){super(),M(this,e,de,ce,Q,{})}}export{be as default};
import{d as a,j as t,T as m,N as j,A as k,b as y,e as v,g as C,B as I,I as f,t as x,h as G,i as S,m as A,k as T,G as z,r as h}from"./index-CoH9aCSV.js";const F=a.div`
  max-width: 950px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`,V=({children:e})=>t.jsx(F,{children:e}),O=a.div`
  display: grid;
  gap: 26px;
  padding: 40px 0 95px;
  width: 100%;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px 0;
  }
`,g=a.div`
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};

  @media (max-width: 1000px) {
    width: 100%;
    height: 170px;
  }
`,M=a.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;

  background: url(${({src:e})=>e});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 10px;

  @media (max-width: 1000px) {
    height: 180px;
  }
`,E=a.div`
  width: 100%;
  height: 100%;
  position: relative;
`,P=a(m)`
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
`,W=({text:e,src:r})=>t.jsx(j,{to:k.IMAGES+"/"+e,children:t.jsx(M,{src:r,alt:e,children:t.jsx(E,{children:t.jsx(P,{children:e})})})}),_=a.div`
  width: 100%;
  height: 100%;
  position: relative;

  margin: 0 auto;

  background: url(${({src:e})=>e});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`,$=a.div`
  width: 100%;
  height: 58px;
  padding: 3px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid rgb(240, 241, 241);

  @media (max-width: 1000px) {
    height: 35px;
  }
`,B=a(m)`
  max-width: ${({maxWidth:e})=>e};
  color: rgb(57, 57, 57);
  font-family: Lexend Deca;
  font-size: 17.54px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -3%;
  text-align: left;
  @media (max-width: 1000px) {
    text-wrap: nowrap;
  }
`,R=a.div`
  width: 39px;
  height: 39px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  &:hover {
    background-color: #f9f9f9;
  }

  &:active {
    background-color: inherit;
  }

  @media (max-width: 1000px) {
    width: 29px;
    height: 29px;
  }
`,D=(e,r)=>e.length>r?e.slice(0,r)+"...":e,U=y,L=()=>v(),u=({src:e,text:r,id:n,isModal:s})=>{const i=C(),d=L(),{favorites:p}=U(c=>c.images),l=p.some(c=>c.id===n),o=c=>{c.stopPropagation(),d(l?G(n):S(n))};let b=s?i>900?50:20:i<=900&&i>650||i<450?17:30;const w={width:s?i>1e3?"20px":"12px":i>1e3?"10px":"8px",height:s?i>1e3?"30px":"16px":i>1e3?"14px":"12px",fill:l?x.colors.orange:"none",color:x.colors.orange};return t.jsx(t.Fragment,{children:t.jsx(_,{src:e,alt:r,children:t.jsxs($,{children:[t.jsx(B,{maxWidth:s&&i>900?"400px":"200px",children:D(r,b)}),t.jsx(I,{onClick:o,children:t.jsx(R,{children:t.jsx(f.FavoritesAlt,{...w})})})]})})})},N=A`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Y=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(3px);
  background: rgba(168, 168, 168, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,H=a.div`
  max-width: 700px;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  position: fixed;
  animation: ${N} 0.3s ease-out;
  z-index: 2000;
  @media (max-width: 900px) {
    max-width: 345px;
    height: 410px;
  }
`,q=a(T)`
  position: absolute;
  right: 13px;
  top: 31px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  cursor: pointer;
  z-index: 1;
  background-color: transparent;
`,J=a.div`
  width: 100%;
  height: 100%;
`,K=({children:e,isOpen:r,onClose:n})=>r?t.jsxs(t.Fragment,{children:[t.jsx(z,{isModalOpen:r}),t.jsx(Y,{onClick:n,children:t.jsxs(H,{onClick:s=>s.stopPropagation(),children:[t.jsx(q,{onClick:n,children:t.jsx(f.Close,{})}),t.jsx(J,{children:e})]})})]}):null,X=({variant:e="image",array:r})=>{const[n,s]=h.useState(!1),[i,d]=h.useState();let p;switch(e){case"category":p=r.map(o=>t.jsx(g,{width:"285px",height:"244px",onClick:()=>s(!n),children:t.jsx(W,{src:o.IMG,text:o.CATEGORY},o.CATEGORY)}));break;case"image":p=r.map(o=>t.jsx(g,{width:"285px",height:"232px",onClick:()=>l(o),children:t.jsx(u,{src:o.urls.small,text:o.alt_description[0].toUpperCase()+o.alt_description.slice(1),id:o.id,isModal:!1},o.id)}));break}const l=o=>{d(o),s(!n)};return t.jsxs(O,{children:[n&&t.jsx(K,{isOpen:n,onClose:()=>s(!n),children:i&&t.jsx(u,{src:i.urls.full,text:i.alt_description[0].toUpperCase()+i.alt_description.slice(1),id:i.id,isModal:!0},i.id)}),p]})};export{V as C,X as G,L as a,U as u};

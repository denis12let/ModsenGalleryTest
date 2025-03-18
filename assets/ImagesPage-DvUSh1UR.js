import{j as e,I as w,P as b,A as m,a as I,r,S as C,b as B,c as f,O as v,e as T,u as A,d as p,T as L,i as V,f as z,g as u,h as O,k,H as D,L as E}from"./index-Cepq7muX.js";import{u as M,C as H,G as P}from"./Gallery-B-buTDPi.js";import{o as g,H as q}from"./Images-BsNo31A0.js";const F=({text:t,setText:n})=>e.jsx(w,{value:t,onChange:i=>n(i.target.value)}),G=({currentPage:t,totalPages:n=1,onPageChange:i})=>{let s=Math.max(1,t-Math.floor(2)),l=Math.min(n,s+4-1);return l-s<3&&(s=Math.max(1,l-4+1)),e.jsxs(b,{children:[e.jsx(m,{onClick:()=>i(t-1),children:t!==1&&"<"}),Array.from({length:l-s+1},(a,o)=>s+o).map(a=>e.jsx(I,{onClick:()=>i(a),isActive:a===t,children:a},a)),e.jsx(m,{onClick:()=>i(t+1),children:t!==n&&">"})]})},W=({options:t,setValue:n})=>{const[i,x]=r.useState(!1),[s,l]=r.useState(t[0].label),a=o=>{n(o.value),l(o.label),x(!1)};return e.jsxs(C,{children:[e.jsxs(B,{onClick:()=>x(!i),children:[s,e.jsx(f.Arrow,{color:""})]}),i&&e.jsx(v,{children:t.map(o=>e.jsx(T,{onClick:()=>a(o),children:o.label},o.id))})]})},_=(t,n)=>{const[i,x]=r.useState(t);return r.useEffect(()=>{const s=setTimeout(()=>{x(t)},n);return()=>{clearTimeout(s)}},[t,n]),i},N=A,R=p.div`
  position: relative;
  max-width: 820px;
  width: 100%;
  height: 54px;
  margin-bottom: 10px;
  padding: 0 20px;
  @media (max-width: 900px) {
    height: 50px;
  }
  & input {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    padding: 0 54px;
    @media (max-width: 900px) {
      font-size: 16px;
      line-height: 20px;
      padding: 0 16px;
    }
  }
`,J=p.div`
  position: absolute;
  top: 18px;
  width: 17px;
  height: 18px;
  @media (min-width: 900px) {
    left: 45px;
  }
  @media (max-width: 900px) {
    right: 35px;
    top: 12px;
    height: 25px;
    width: 25px;
  }
`,K=p(L)`
  font-family: Lexend Deca;
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  text-transform: capitalize;
  max-width: 680px;
  padding-bottom: 600px;
  padding-top: 120px;
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 400px;
  }
`,Q=p.div`
  width: 100%;
  padding-top: 25px;
  margin-bottom: -10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;
`,U=p.p`
  color: rgb(57, 57, 57);
  font-family: Lexend Deca;
  font-size: 17.54px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -3%;
  text-align: left;
`,ee=()=>{const t=M(),{images:n,isLoading:i,pagination:x}=N(V.getSlice),[s,l]=r.useState(1),[a,o]=r.useState(""),[c,j]=r.useState(g[0].value),d=z().pathname.split("/").at(-1).toLowerCase(),S=y=>{o(y)},h=_(a,400);return r.useEffect(()=>{a!==""&&l(1),h&&t(u({query:a,orderBy:c,page:s}))},[h]),r.useEffect(()=>(t(d==="images"&&a===""?O({page:s,orderBy:c}):u({query:d==="images"?a:d,page:s,orderBy:c})),()=>{t(k.clearImages())}),[s,c]),e.jsxs(e.Fragment,{children:[e.jsxs(q,{children:[e.jsxs(D,{fontSize:"48px",lineheight:"75px",children:["Let's find some ",e.jsx("span",{children:"Images"}),e.jsx("br",{}),"here!"]}),e.jsxs(R,{children:[e.jsx(J,{children:e.jsx(f.Search,{})}),e.jsx(F,{text:a,setText:S})]})]}),e.jsxs(H,{children:[e.jsxs(Q,{children:[e.jsx(U,{children:"Sort by"}),e.jsx(W,{options:g,value:c,setValue:j})]}),i?e.jsx(E,{}):n.length?e.jsx(P,{array:n,variant:"image"}):e.jsxs(K,{children:["The search didn't yield any results, please try ",e.jsx("span",{children:"again"}),"."]}),e.jsx(G,{currentPage:s||1,totalPages:x.total_pages||1e3,onPageChange:l})]})]})};export{ee as default};

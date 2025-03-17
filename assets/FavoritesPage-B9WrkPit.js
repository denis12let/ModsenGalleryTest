import{d as e,T as i,j as t}from"./index-BS9VaUGl.js";import{u as s,C as n,G as r}from"./Gallery-t440xW4g.js";const x=e.div`
  width: 100%;
  padding-bottom: 600px;
  padding-top: 60px;
`,p=e(i)`
  font-family: Lexend Deca;
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  text-transform: capitalize;
  max-width: 680px;
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 400px;
  }
`,d=e(i)`
  color: rgb(57, 57, 57);
  font-family: Roboto;
  font-size: 40px;
  font-weight: 400;
  line-height: 47px;
  padding-bottom: 25px;
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 38px;
  }
`,h=e(i)`
  color: rgb(224, 164, 73);
  font-family: Roboto;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  @media (max-width: 900px) {
    font-size: 24px;
    line-height: 28px;
  }
`,f=()=>{const{favorites:o}=s(a=>a.images);return t.jsx(x,{children:t.jsx(n,{children:o.length?t.jsxs(t.Fragment,{children:[t.jsx(h,{children:"Saved by you"}),t.jsx(d,{children:"Your favorites list"}),t.jsx(r,{array:o,variant:"image"})]}):t.jsxs(p,{children:["Your ",t.jsx("span",{children:"favorites"})," list is empty"]})})})};export{f as default};

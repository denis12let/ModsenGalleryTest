import{d as e,T as i,j as t}from"./index-D8847-Cn.js";import{C as a,G as n}from"./Gallery-CK6wJIBx.js";const s=e.div`
  width: 100%;
  padding-bottom: 600px;
  padding-top: 60px;
`,r=e(i)`
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
`,x=e(i)`
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
`,p=e(i)`
  color: rgb(224, 164, 73);
  font-family: Roboto;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  @media (max-width: 900px) {
    font-size: 24px;
    line-height: 28px;
  }
`,h=()=>{const o=JSON.parse(localStorage.getItem("favorites")||"[]");return t.jsx(s,{children:t.jsx(a,{children:o.length?t.jsxs(t.Fragment,{children:[t.jsx(p,{children:"Saved by you"}),t.jsx(x,{children:"Your favorites list"}),t.jsx(n,{array:o,variant:"image"})]}):t.jsxs(r,{children:["Your ",t.jsx("span",{children:"favorites"})," list is empty"]})})})};export{h as default};

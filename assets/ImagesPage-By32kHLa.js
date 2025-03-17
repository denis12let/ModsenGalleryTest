import{d as s,T,j as e,r as d,I as y,f as j,s as z,u as L,a as A,c as B,L as D}from"./index-jCmddk-W.js";import{a as E,u as V,C as M,G as O}from"./Gallery-BMxqIBHQ.js";import{H as F,a as _,I as G}from"./ImagesCategories-C7dVw-7X.js";const H=s.div`
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
`,R=s.div`
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
`,$=s(T)`
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
`,q=s.div`
  width: 100%;
  padding-top: 25px;
  margin-bottom: -10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;
`,P=s.p`
  color: rgb(57, 57, 57);
  font-family: Lexend Deca;
  font-size: 17.54px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -3%;
  text-align: left;
`,W=s.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  @media (max-width: 900px) {
    border-radius: 16px;
  }
`,N=({text:t,setText:n})=>e.jsx(W,{value:t,onChange:i=>n(i.target.value)}),J=(t,n)=>{const[i,p]=d.useState(t);return d.useEffect(()=>{const o=setTimeout(()=>{p(t)},n);return()=>{clearTimeout(o)}},[t,n]),i},K=s.div`
  position: relative;
  width: 200px;

  color: rgb(196, 196, 196);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: capitalize;
`,Q=s.div`
  padding: 10px 16px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 16px;
  background: rgb(255, 255, 255);
`,U=s.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;
  list-style: none;
  z-index: 1000;
  max-height: 150px;
  overflow-y: auto;
`,X=s.li`
  padding: 10px;
  cursor: pointer;
  border: 1px solid rgb(196, 196, 196);
  &:hover {
    background-color: #f0f0f0;
  }
`;s.span`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.2s;
`;const Y=({options:t,setValue:n})=>{const[i,p]=d.useState(!1),[o,r]=d.useState(t[0].label),l=a=>{n(a.value),r(a.label),p(!1)};return e.jsxs(K,{children:[e.jsxs(Q,{onClick:()=>p(!i),children:[o,e.jsx(y.Arrow,{color:""})]}),i&&e.jsx(U,{children:t.map(a=>e.jsx(X,{onClick:()=>l(a),children:a.label},a.id))})]})},Z=s.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -70px;
  padding-bottom: 40px;
  gap: 10px;
  width: 100%;
  @media (max-width: 650px) {
    margin-top: 0px;
    padding-bottom: 20px;
  }
`,S=s.button`
  padding: 3px 10px;
  border-radius: 4px;
  background-color: ${({isActive:t})=>t?"#F17900":"#fff"};
  color: ${({isActive:t})=>t?"#ffffff":"#393939"};
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${({isActive:t})=>t?"#f79c40":"#f0f0f0"};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
`,w=s(S)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`,ee=({currentPage:t,totalPages:n=1,onPageChange:i})=>{let o=Math.max(1,t-Math.floor(2)),r=Math.min(n,o+4-1);return r-o<3&&(o=Math.max(1,r-4+1)),e.jsxs(Z,{children:[e.jsx(w,{onClick:()=>i(t-1),children:t!==1&&"<"}),Array.from({length:r-o+1},(l,a)=>o+a).map(l=>e.jsx(S,{onClick:()=>i(l),isActive:l===t,children:l},l)),e.jsx(w,{onClick:()=>i(t+1),children:t!==n&&">"})]})},ie=()=>{const t=[{id:1,value:"popular",label:"Relevant"},{id:2,value:"latest",label:"Latest"}],n=E(),{images:i,isLoading:p,pagination:o}=V(c=>c.images),[r,l]=d.useState(1),[a,I]=d.useState(""),[x,v]=d.useState(t[0].value),k=c=>{I(c)},u=J(a,400),C=()=>[...i].sort((c,b)=>x==="popular"?b.likes-c.likes:new Date(b.created_at).getTime()-new Date(c.created_at).getTime());d.useEffect(()=>{(u||x)&&n(a?j({query:a,orderBy:x,page:r}):z(C()))},[u,x,r]);const f=L(),h=f.pathname.split("/").at(-1).toLowerCase(),m=f.pathname.includes("images");let g;return d.useEffect(()=>(h==="images"?n(A({})):a===""&&n(j({query:h,page:r})),()=>{n(B())}),[r]),m?g=i:g=G,e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:[e.jsxs(_,{fontSize:"48px",lineheight:"75px",children:["Let's find some ",e.jsx("span",{children:"Images"}),e.jsx("br",{}),"here!"]}),e.jsxs(H,{children:[e.jsx(R,{children:e.jsx(y.Search,{})}),e.jsx(N,{text:a,setText:k})]})]}),e.jsx(M,{children:p?e.jsx(D,{}):i.length?e.jsxs(e.Fragment,{children:[e.jsxs(q,{children:[e.jsx(P,{children:"Sort by"}),e.jsx(Y,{options:t,value:x,setValue:v})]}),e.jsx(O,{array:g,variant:m?"image":"category"}),a||h!=="images"?e.jsx(ee,{currentPage:r,totalPages:o.total_pages||1,onPageChange:l}):e.jsx(e.Fragment,{})]}):e.jsxs($,{children:["The search didn't yield any results, please try ",e.jsx("span",{children:"again"}),"."]})})]})};export{ie as default};

import{d as s,T as a,j as t}from"./index-Lk1i7E8S.js";const i=s.div`
  width: 100%;
  height: 420px;
  background: url('/src/assets/images/heroSectionBg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) and (min-width: 600px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    height: 200px;
  }
`,r=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 87px;
  @media (max-width: 600px) {
    gap: 10px;
  }
`,c=s(a)`
  color: #fff;
  font-family: Roboto;
  font-size: ${({fontSize:e})=>e||"48px"};
  font-weight: 700;
  line-height: ${({lineheight:e})=>e||"48px"};
  text-align: center;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
  text-wrap: nowrap;
  @media (max-width: 900px) {
    font-size: ${({fontSize:e="48px"})=>parseInt(e)/2+"px"};
    line-height: 56px;
  }
  @media (max-width: 360px) {
    text-wrap: wrap;
  }
`,g=({children:e})=>t.jsx(i,{children:t.jsx(r,{children:e})}),p=[{CATEGORY:"Art",IMG:"/src/assets/images/categories/art.jpeg"},{CATEGORY:"Cars",IMG:"/src/assets/images/categories/cars.jpeg"},{CATEGORY:"Architecture",IMG:"/src/assets/images/categories/architecture.jpeg"},{CATEGORY:"Food",IMG:"/src/assets/images/categories/food.jpeg"},{CATEGORY:"Religion",IMG:"/src/assets/images/categories/religion.jpeg"},{CATEGORY:"Clothes",IMG:"/src/assets/images/categories/clothes.jpeg"},{CATEGORY:"Technologies",IMG:"/src/assets/images/categories/technologies.jpeg"},{CATEGORY:"Music",IMG:"/src/assets/images/categories/music.jpeg"},{CATEGORY:"Business",IMG:"/src/assets/images/categories/business.jpeg"},{CATEGORY:"Sport",IMG:"/src/assets/images/categories/sport.jpeg"},{CATEGORY:"Social",IMG:"/src/assets/images/categories/social.jpeg"},{CATEGORY:"Sky",IMG:"/src/assets/images/categories/sky.jpeg"}];export{g as H,p as I,c as a};

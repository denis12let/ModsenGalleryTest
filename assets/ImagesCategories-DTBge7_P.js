import{d as s,T as o,j as t}from"./index-BS9VaUGl.js";const n="/ModsenGalleryTest/assets/heroSectionBg-CJC64Coh.png",a=s.div`
  width: 100%;
  height: 420px;
  background: url(${n});
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
`,i=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 87px;
  @media (max-width: 600px) {
    gap: 10px;
  }
`,f=s(o)`
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
`,m=({children:e})=>t.jsx(a,{children:t.jsx(i,{children:e})}),r="/ModsenGalleryTest/assets/art-Dwa1cxEz.jpeg",c="/ModsenGalleryTest/assets/cars-CMpfzpcF.jpeg",l="/ModsenGalleryTest/assets/architecture-CPdLLjMT.jpeg",p="/ModsenGalleryTest/assets/food-BS2iq6kG.jpeg",x="/ModsenGalleryTest/assets/religion-CQhhnKs9.jpeg",d="/ModsenGalleryTest/assets/clothes-BHPc2ww0.jpeg",G="/ModsenGalleryTest/assets/technologies-ChxqDAvf.jpeg",g="/ModsenGalleryTest/assets/music-Xaf8P2W6.jpeg",h="/ModsenGalleryTest/assets/business-B-MrHoS9.jpeg",T="/ModsenGalleryTest/assets/sport-Dytn71Hg.jpeg",M="/ModsenGalleryTest/assets/social-CsYzGXQW.jpeg",y="/ModsenGalleryTest/assets/sky-DxW_bgLx.jpeg",u=[{CATEGORY:"Art",IMG:r},{CATEGORY:"Cars",IMG:c},{CATEGORY:"Architecture",IMG:l},{CATEGORY:"Food",IMG:p},{CATEGORY:"Religion",IMG:x},{CATEGORY:"Clothes",IMG:d},{CATEGORY:"Technologies",IMG:G},{CATEGORY:"Music",IMG:g},{CATEGORY:"Business",IMG:h},{CATEGORY:"Sport",IMG:T},{CATEGORY:"Social",IMG:M},{CATEGORY:"Sky",IMG:y}];export{m as H,u as I,f as a};

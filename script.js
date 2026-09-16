const cakes=[
"IMG_6357.jpeg","IMG_4657.jpeg","IMG_7768.jpeg","IMG_6347.jpeg","IMG_9196.jpeg","IMG_4400.jpeg",
"IMG_2639.jpeg","IMG_1497.jpeg","IMG_4696.jpeg","IMG_4318.jpeg","IMG_6436.jpeg","IMG_1834.jpeg",
"IMG_3419.jpeg","IMG_3833.jpeg","IMG_3559.jpeg","IMG_2987.jpeg","IMG_3549.jpeg","IMG_3848.jpeg",
"IMG_2007.jpeg","IMG_1594.jpeg","IMG_1827.jpeg","IMG_4614.jpeg","IMG_4641.jpeg","IMG_3060.jpeg",
"IMG_2882.jpeg","IMG_4606.jpeg","IMG_3540.jpeg","IMG_2744.jpeg","IMG_0952.jpeg","IMG_1589.jpeg",
"IMG_2649.jpeg","IMG_2861.jpeg","IMG_3308.jpeg","IMG_2527.jpeg","IMG_0793.jpeg","IMG_0838.jpeg",
"IMG_0910.jpeg","IMG_0951.jpeg","IMG_0968.jpeg","IMG_0131.jpeg","IMG_0152.jpeg","IMG_0259.jpeg",
"IMG_0473.jpeg","IMG_0127.jpeg","IMG_1592.jpeg","IMG_1981.jpeg","IMG_2758.jpeg","IMG_2776.jpeg",
"IMG_3932.jpeg","IMG_4740.jpeg","IMG_6758.jpeg","IMG_8792.jpeg"
];
const grid=document.querySelector("#galleryGrid"),more=document.querySelector("#loadMore");let shown=0;
function render(n=16){cakes.slice(shown,shown+n).forEach((name,i)=>{const f=document.createElement("figure"),img=document.createElement("img");img.src=`images/${name}`;img.alt="Custom cake by Sugary Dreams in Brooklyn, New York";img.loading=shown+i<4?"eager":"lazy";f.append(img);grid.append(f)});shown=Math.min(shown+n,cakes.length);if(shown>=cakes.length)more.hidden=true}
render();more.addEventListener("click",()=>render(16));
const menu=document.querySelector(".menu-button"),nav=document.querySelector(".nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelector("#year").textContent=new Date().getFullYear();
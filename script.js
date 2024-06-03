const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");

main.addEventListener("mousemove",(e=>{
  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:1
    // ease:"power2.out"
  })
})
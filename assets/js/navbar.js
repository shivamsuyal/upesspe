const menu = document.getElementById("menu")
const navbarTimeline = gsap.timeline({
    scrollTrigger:{
        trigger: "#page1",
        start: "+20% top",
        scroller: "#scroller__body",
        scrub:true,
    }
})

navbarTimeline
    .to("nav",{backgroundColor:"#141316"})
    .to("#LOGO",{
      height:"3.8rem"  
    },"<")
    // .to("#LOGO_TEXT",{
    //   opacity:"1"  
    // },"<")


document.querySelectorAll("nav li").forEach(li=>{
  li.addEventListener("mouseenter",(ele)=>{
    document.documentElement.style.setProperty('--navBarLine-x', `${ele.target.offsetLeft-5}px`);
    document.documentElement.style.setProperty('--navBarLine-y', `${ele.target.offsetTop + ele.target.offsetHeight + 5}px`);
    document.documentElement.style.setProperty('--navBarLine-width', `${ele.target.offsetWidth+10}px`);
  })
})

document.querySelector("nav ul").addEventListener("mouseleave",()=>{
  document.documentElement.style.setProperty('--navBarLine-x', "0px");
  document.documentElement.style.setProperty('--navBarLine-width', "0px");
})

document.querySelector(`ul a[href="${document.location.pathname}"]`).classList.add("activeNavBar")

function toggelMenu() {
  menu.classList.toggle("openMenu")
}


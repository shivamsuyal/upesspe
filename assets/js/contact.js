let cardMaxHeight = 0;
document.querySelectorAll(".card").forEach((ele)=>{
    var _h = ele.clientHeight
    if(_h > cardMaxHeight){
        cardMaxHeight = _h
    }
})

document.querySelectorAll(".card").forEach((ele)=>{
    ele.style.height = `${cardMaxHeight}px`
})


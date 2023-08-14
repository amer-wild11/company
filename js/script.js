let scrollBtn = document.querySelector(".scroll")
let body = document.querySelector("body")

if(scrollY >= 2200){
    scrollBtn.classList.remove("hidden")
}else{
    scrollBtn.classList.add("hidden")
}
window.onscroll  = function(){
    if(scrollY >= 2200){
        scrollBtn.classList.remove("hidden")
    }else{
        scrollBtn.classList.add("hidden")
    }
}
scrollBtn.onclick = function(){
    window.scrollTo({
        behavior:"smooth",
        top:0,
    })
}
// }
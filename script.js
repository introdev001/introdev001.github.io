// side bar 
let sidebar = document.querySelector("#sidebar")
 let humbargur = document.querySelector("#humbargur")
humbargur.addEventListener("click", () => {
    sidebar.classList.toggle("active")
    humbargur.classList.toggle("open")
})
// toggle theme btn
let aqua = document.querySelector("#blue")
//main selectors
let footer = document.querySelector("footer")
let nav = document.querySelector("#navbar")
let body = document.querySelector("body")
//highlight class
let highlight = document.querySelectorAll(".highlight")
let highlight1 = document.querySelector("#highlight1")
// home link and side home
let home = document.querySelector("#home-link")
let sidehome = document.querySelector("#side-home-link")
//theme toggle container and btn
let themecont = document.querySelector("#theme-container")
let theme1 = document.querySelector(".theme1")
let theme2 = document. querySelector(".theme2")
let theme3 = document.querySelector(".theme3")
//img and hire btn
let profile = document.querySelector("#profile")
let btn = document.querySelector("#btn")

//function for applying classes 
function addtheme(aqua){
    nav.classList.toggle("blue")
    body.classList.toggle("blue")
    footer.classList.toggle("blue")
    btn.classList.toggle("blue")
    highlight1.classList.toggle("blue")
    profile.classList.toggle("blue")
    themecont.classList.toggle("blue")
    theme1.classList.toggle("blue")
    theme2.classList.toggle("blue")
    home.classList.toggle("blue")
    sidehome.classList.toggle("blue")
highlight[0].classList.toggle("blue")
highlight[1].classList.toggle("blue")
}
//fnt for resetting
function reset(){
    nav.classList.remove("blue")
    body.classList.remove("blue")
    footer.classList.remove("blue")
    btn.classList.remove("blue")
    highlight1.classList.remove("blue")
    profile.classList.remove("blue")
    themecont.classList.remove("blue")
    theme1.classList.remove("blue")
    theme2.classList.remove("blue")
    home.classList.remove("blue")
    sidehome.classList.remove("blue")
highlight[0].classList.remove("blue")
highlight[1].classList.remove("blue")
}
 // fnt for making transition smooth
 function smooth(smoothaqua){
    light.style.transition = "1s ease"
    body.style.transition = "1s ease"
    nav.style.transition = "1s ease"
    profile.style.transition = "1s ease"
    btn.style.transition = "1s ease"
    theme1.style.transition = "1s ease"
    theme2.style.transition = "1s ease"
    themecont.style.transition = "1s ease"
    footer.style.transition = "1s ease"
    home.style.transition = "1s ease"
    sidehome.style.transition = "1s ease"
    blue.style.transition = "1s ease"
    highlight[0].style.transition = "1s ease"
    highlight[1].style.transition = "1s ease"
    highlight1.style.transition = "1s ease"
 }
 //click event for aqua theme
light.addEventListener("click" , () => {
    addtheme(aqua)
    smooth(aqua)
})
//click event for reset theme
theme1.addEventListener("click" , () => {
    reset()
    smooth()
})
let header = document.querySelector("header")
let content = document.querySelector("#content")
let loader = document.querySelector("#preloader")
let html = document.querySelector("html")
 window.addEventListener("load" , () => {
    loader.style.opacity = 0
    setInterval(() => {
            loader.style.display = "none"
            html.style.overflow = "visible"
            body.style.overflow = "visible"
    } , 1000)

 })
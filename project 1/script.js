// toggle sidebar
let togglebtn = document.querySelector("#humbarger-menu")
let sidebar = document.querySelector("#side-bar")

togglebtn.addEventListener("click" , () => {
sidebar.classList.toggle("active")
togglebtn.classList.toggle("open")
})
// preloader
let preloader = document.querySelector("#preloader")
let spinner = document.querySelector("#spinner")
let main = document.querySelector("main")
let header = document.querySelector("header")
let footer = document.querySelector("footer")
let html = document.querySelector("html")
let body = document.querySelector("body")

window.addEventListener("load" , () => {
    setInterval(() => {
        body.style.overflow = "visible"
        html.style.overflow = "visible"
    } , 1200)
    setInterval(() => {
        preloader.style.opacity = 0
        preloader.style.visibility = "hidden"


    }, 1000)
})
 
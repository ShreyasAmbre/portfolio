var menubtn = document.querySelector("menu-btn")
var menuburger = document.getElementsByClassName("menu-btn__burger")

var nav = document.getElementsByClassName("nav")
var menuNav = document.getElementsByClassName("menu-nav")

var showMenu = false

function MenuOpen(){
    if(!showMenu){
        menuburger[0].classList.add('open') 
        nav[0].classList.add('open') 
        menuNav[0].classList.add('open') 
        
        showMenu = true
    }else{
        menuburger[0].classList.remove('open')
        nav[0].classList.remove('open') 
        menuNav[0].classList.remove('open') 

        showMenu = false
    }
}
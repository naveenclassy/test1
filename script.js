let burger = document.querySelector(".burger");
let links=document.querySelector(".navlinks");
let logonameshow=document.querySelector(".logoname");
let texthead=document.querySelector(".texthead");

burger.addEventListener('click',()=>{
    links.classList.toggle("show");
    texthead.classList.toggle("textheadhide");
    
    

})
burger.addEventListener('click',()=>{
    logonameshow.classList.toggle("showlogoname");

})

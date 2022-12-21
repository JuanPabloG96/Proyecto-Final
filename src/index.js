//interacción con el modal

const formCloseBtn = document.querySelector(".close__form");
const formOpenBtn = document.querySelectorAll(".rBtn");
const modal = document.getElementById("reservation");

formOpenBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        modal.removeAttribute("hidden");
    })
})

formCloseBtn.addEventListener('click', ()=>{
    modal.setAttribute("hidden", "");
})

//interacción con el menu en dispositivos móviles
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu__icon-container");
const menuOption = document.querySelectorAll(".menu__link");
const nav = document.querySelector(".nav");

function displayMenu(){
    if(screen.width <=876){
        if(menu.style.height == ""){
            menu.style.height = "86vh";
        }
        else{
            menu.style.height = "";
        }
        
        if(nav.style.position == ""){
            nav.style.position = "fixed";
        }
        else{
            nav.style.position = "";
        }
    }    
}

menuBtn.addEventListener('click', ()=>{
    displayMenu();
})

menuOption.forEach(option =>{
    option.addEventListener('click', ()=>{
        displayMenu();
    })
})
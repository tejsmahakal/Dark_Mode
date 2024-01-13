let body = document.getElementById("body");
let toggleSwitch = document.getElementById("toggle-switch");
let toogleContainer = document.getElementById("toggle-container");

toogleContainer.addEventListener("click",(e)=>{
    body.classList.toggle("dark-mode")
    toggleSwitch.classList.toggle("dark-mode-position")
})

document.addEventListener("keydown",(e)=>{
    if(e.key == "t" || e.key == "T"){
        body.classList.toggle("dark-mode")
        toggleSwitch.classList.toggle("dark-mode-position")
    }
})
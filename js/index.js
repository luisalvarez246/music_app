const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const clous = document.querySelector("#clous");

open.addEventlistener("click", () => {
    nav.classList.add("visible");
})

close.addEventlistener("click", () =>{
    nav.classList.remove("visible")
})

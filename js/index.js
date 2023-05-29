const nav = document.querySelector("#nav");
const open = document.querySelector("#openMenu");
const close = document.querySelector("#closeMenu");

open.addEventlistener("click", () => {
    nav.classList.add("visible");
})

close.addEventlistener("click", () =>{
    nav.classList.remove("visible")
})

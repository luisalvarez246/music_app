/*const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventlistener("click", () => {
    nav.classList.add("visible");
})

close.addEventlistener("click", () =>{
    nav.classList.remove("visible")
})
*/

toggle.onclick = () => {
    items.classList.toggle("open");
    items.classList.toggle("close");
}

export const goToPage = (url) => {
    window.location.href = url;
}
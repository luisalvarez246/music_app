import { goToPage } from "./index";

document.getElementById("drumButton").addEventListener("click", (event) => {
    goToPage("./drums.html")
})

document.getElementById("kalimbaButton").addEventListener("click", (event) => {
    goToPage("./kalimba.html")
})
import { goToPage } from "./index.js";

document.getElementById("drumButton").addEventListener("click", (event) => {
    goToPage("./drums.html")
})

document.getElementById("kalimbaButton").addEventListener("click", (event) => {
    goToPage("./kalimba.html")
})
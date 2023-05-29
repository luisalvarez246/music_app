import { goToPage } from "./index.js";

document.getElementById("drumButton").addEventListener("click", (event) => {
    goToPage("./../pages/drums.html")
})

document.getElementById("kalimbaButton").addEventListener("click", (event) => {
    goToPage("./../pages/kalimba.html")
})
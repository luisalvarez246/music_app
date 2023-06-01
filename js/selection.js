import { goToPage } from "./index.js";

document.getElementById("drumButton").addEventListener("click", (event) => {
    goToPage("./../html/drums.html")
})

document.getElementById("kalimbaButton").addEventListener("click", (event) => {
    goToPage("./../html/kalimba.html")
})
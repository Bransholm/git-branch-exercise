"use strict"

window.addEventListener("load", startApp);

function startApp() {
    console.log("Javascript kører");
    andenFunktion()
}

function andenFunktion() {
    console.log("anden funktion");
    fjerdeFunktion()
}

function fjerdeFunktion() {
    console.log("Fjerde funktion kører");
}
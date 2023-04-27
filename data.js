"use strict"

window.addEventListener("load", startApp);

function startApp() {
    console.log("Javascript kører");
    andenFunktion()
}

function andenFunktion() {
    console.log("anden funktion");
    tredjeFunktion()
}

function tredjeFunktion() {
    console.log("Tredje funktion")
}
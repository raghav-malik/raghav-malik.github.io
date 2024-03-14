"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function menuOpen()
{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function menuClose()
{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

hamburger.addEventListener("click", menuOpen);
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", menuClose));
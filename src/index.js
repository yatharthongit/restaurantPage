import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

const homee=document.querySelector(".home");
homee.addEventListener("click",home);
const menuu=document.querySelector(".menu");
menuu.addEventListener("click",menu);
const ab=document.querySelector(".about");
ab.addEventListener("click",about);
home();

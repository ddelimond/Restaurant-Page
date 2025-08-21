import './style.css'
import {generateHome} from "./home.js";
import {generateAbout} from "./about.js";
import {generateMenu} from "./menu.js";

let homeBtn = document.querySelector('#Home');
homeBtn.addEventListener('click',generateHome)

let aboutBtn = document.querySelector('#About');
aboutBtn.addEventListener('click',generateAbout)

let menuBtn = document.querySelector('#Menu');
menuBtn.addEventListener('click',generateMenu)
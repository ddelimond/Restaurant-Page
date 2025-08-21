
import menuItemArray from "./menuItemArray.js";
import IceCream from './assets/Ice Cream.jpg'
import {generateCardStyle} from "./menuCards.js";

// product array
let menuItems = menuItemArray;

let contentContainer = document.querySelector('#content');


function generateMenu (){
    // removed previous class on content container and adds current page class
    let prevClassName = contentContainer.classList[0];

    contentContainer.classList.remove(prevClassName);
    contentContainer.classList.add('menu');

//     check for if content container has home class , if so remove it

    //  clearing out html in  contentContainer
    contentContainer.innerHTML= '';


    // creating a new section called hero and adding menuHero class to the element
    let menuHero = document.createElement('section');
    menuHero.classList.add('menuHero');


    // creating img element as well as the image container and adding it to the menuoHero
    let heroImgContainer = document.createElement('div');
    let heroImg = document.createElement('img');
    // heroImg.src  = sundae;
    heroImg.src = IceCream;
    heroImg.alt = 'photo of ice cream';

    heroImgContainer.append(heroImg);
    menuHero.append(heroImgContainer);

    // creating header for the page
    let menuHeader = document.createElement('h1');
    menuHeader.innerText ="Menu";

    menuHero.append(menuHeader);

    // appending Hero to the contentContainer
    contentContainer.append(menuHero);


    // creation of the menuItemContainer
    let menuItemsContainer = document.createElement('section');
    menuItemsContainer.classList.add('menuItemsContainer');

    // appending section to the contentContainer
    contentContainer.append(menuItemsContainer);

    // cardLogic
    menuItems.map((product, i) => generateCardStyle(product));

}

export {generateMenu}
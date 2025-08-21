

import owner from './assets/owner.jpg'
import mission from './assets/emptybowl.jpg'
import location from './assets/location.jpg'

let contentContainer = document.querySelector('#content');



function generateAbout (){

    let removedClass =  contentContainer.classList[0];
    contentContainer.classList.remove(removedClass);
    contentContainer.classList.add('about')

//  clearing out contentContainer

    contentContainer.innerHTML= '';




    let object1 = {img: owner, header: 'Our Story', paragraph:'Frosty\'s was born from the passion and determination of Marcus "Frosty" Thompson, who opened his dream ice cream shop in 2025 after years of perfecting recipes in his home kitchen. A former culinary school graduate who spent his weekends experimenting with unique flavor combinations, Marcus decided to leave his corporate job to pursue his true calling of bringing joy to people through exceptional ice cream. What started as a leap of faith and a small business loan has quickly become a cherished addition to the Henderson Road community. Marcus\'s commitment to using premium ingredients and creating both classic favorites and innovative seasonal flavors has already begun building a loyal following of ice cream enthusiasts who appreciate his attention to detail and genuine love for the craft. The original striped awning and cheerful facade still welcome families, couples on first dates, and anyone seeking a sweet escape from the everyday.'}

    let object2 = {img:mission, header:'Our Mission', paragraph: 'At Frosty\'s, we believe that ice cream is more than just dessert—it\'s a moment of pure joy that brings people together. Our mission is to craft exceptional frozen treats using the finest ingredients while creating lasting memories for our Columbus community. From our hand-scooped classics to our innovative seasonal flavors, we\'re committed to delivering happiness in every cone, cup, and pop. We strive to be the place where celebrations begin, comfort is found, and simple pleasures remind us what matters most: sharing sweet moments with the people we love.'}

    let object3 = {img:location, header: 'Stop by!', paragraph:'Visit us at 2010 Henderson Road, Columbus, Ohio, where every day is a little sweeter.'}

    let header = document.createElement('h2');
    header.innerText = 'About Frosty\'s';
    contentContainer.append(header);



    createAboutElement(object1);

    createAboutElement(object2);

    createAboutElement(object3);


}




function createAboutElement(object){

let sectionContainer = document.createElement('div');
sectionContainer.classList.add('ownerContainer');
sectionContainer.classList.add('outline');

contentContainer.append(sectionContainer);

let aboutImgContainer = document.createElement('div');
aboutImgContainer.classList.add('aboutImgContainer');

sectionContainer.append(aboutImgContainer);


let aboutImage = document.createElement('img');
aboutImage.src = object.img;
aboutImage.alt = 'Related photo';

aboutImgContainer.append(aboutImage);

let secondHeader = document.createElement('h4');
secondHeader.innerText = object.header;
sectionContainer.append(secondHeader);


let desc = document.createElement('p');
desc.innerText = object.paragraph;

sectionContainer.append(desc);

}

export {generateAbout}
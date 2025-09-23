

let contentContainer = document.querySelector('#content');


function generateHome (){

// removed previous class on content container and adds current page class
    let prevClassName = contentContainer.classList[0];

    contentContainer.classList.remove(prevClassName);
    contentContainer.classList.add('home');

    contentContainer.innerHTML = '';

// creating h2 header for home text banner
        let homeText = document.createElement('h2');
        homeText.classList.add('homeText');
        homeText.innerText = 'Welcome to Frosty\'s Ice Cream Shop!';

        contentContainer.append(homeText);

//creating p element for home text banner
        let homeBodyText = document.createElement('p');
        homeBodyText.innerHTML = 'Beat the heat with our handcrafted ice cream made fresh daily! Perfect for scorching summer days or whenever you\'re craving something sweet.'

        contentContainer.append(homeBodyText);

}


export {generateHome}
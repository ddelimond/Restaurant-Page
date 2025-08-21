
function generateCardStyle(product){
    let prod = product;

    let menuItemsContainer = document.createElement('section');

    menuItemsContainer.classList.add('menuItemsContainer');

    let contentContainer = document.querySelector('#content');

    // appending section to the contentContainer
    contentContainer.append(menuItemsContainer);

// creating menuItemContainer
    let menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menuItemContainer');

    // creating container for menuItem Image
    let menuItemImgContainer = document.createElement('div');
    menuItemImgContainer.classList.add('itemImgContainer');

    // creating Image element for menu items photo
    let menuItemImg = document.createElement('img');
    menuItemImg.src = prod.img;
    menuItemImg.alt = `photo of ${prod.name}`;

    menuItemImgContainer.append(menuItemImg);
    menuItemContainer.append(menuItemImgContainer);

    let menuItemTextContainer = document.createElement('div');
    menuItemTextContainer.classList.add('menuItemTextContainer');

    menuItemContainer.append(menuItemTextContainer);

    // adding name of the menu Item to the menuItem card
    let menuItemName = document.createElement('h4');
    menuItemName.innerText = prod.name;
    menuItemTextContainer.append(menuItemName);

    //     adding price / span element to menuItem card
    let menuItemPrice = document.createElement('span');
    menuItemPrice.innerText = prod.price;
    menuItemTextContainer.append(menuItemPrice);

    //     adding description of menuItem to card
    let menuItemDescription = document.createElement('p');
    menuItemDescription.innerText = prod.description;
    menuItemTextContainer.append(menuItemDescription);

    menuItemsContainer.append(menuItemContainer);

}


export{generateCardStyle}
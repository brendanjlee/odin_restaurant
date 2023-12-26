import loadHeader from './loadHeader';
import placeHolder from '../../assets/placeholderfood.svg'

// create multiple sections
function createSection(sectionName, items) {
    const element = document.createElement('div');
    element.classList.add('section-container');

    // Set section name
    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = sectionName;
    element.appendChild(sectionTitle);

    // add items onto the section
    items.forEach(item => {
        element.appendChild(item);
    });

    return element;
}

// create single menu item
function createMenuItem(name, price, desc, picSrc) {
    const element = document.createElement('div');
    element.classList.add('food-item');

    // title
    const title = document.createElement('h3');
    title.innerHTML = name;
    element.appendChild(title);

    // picture
    const pic = new Image();
    pic.src = picSrc;
    element.appendChild(pic);

    // desc
    const description = document.createElement('p');
    description.innerHTML = desc;
    element.appendChild(description);

    // price
    const priceElem = document.createElement('p');
    priceElem.innerHTML = price;
    element.appendChild(priceElem)

    return element;
}

function loadMenu() {
    loadHeader();
    const contentDiv = document.querySelector('.content');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    contentDiv.appendChild(menuContainer);

    // test create an elemnt
    const beverages = [];
    let carbinated = createMenuItem('Carbinated Drinks', 1.39, 'Fresh carbinated drinks. Choose from: Coke, Sprite, Root Beer, and Fanta', placeHolder);
    let beer = createMenuItem('Draught Beer', 5.99, 'Beer that\'s thinner than water', placeHolder);
    let shots = createMenuItem('Shooters', 4.99, 'A shot of your favorite alcohol', placeHolder);
    let mixedDrinks = createMenuItem('Mixed Cocktails', 8.99, 'We will make any drink you want', placeHolder);
    beverages.push(carbinated);
    beverages.push(beer);
    beverages.push(shots); 
    beverages.push(mixedDrinks);
    menuContainer.appendChild(createSection('Beverages', beverages));

    // Create Food items
    const foods = [];
    let fries = createMenuItem('Fries', 8.99, 'Delicious and crunchy fries', placeHolder);
    foods.push(fries);
    let burgers = createMenuItem('Harry`s Burgers', 9.99, 'Harry\'s artisanal burgers', placeHolder);
    foods.push(burgers);
    let wings = createMenuItem('Wings', 9.99, 'Dozen smoking hot wings', placeHolder);
    foods.push(wings);
    let chips = createMenuItem('Nacho Cheese', 6.99, 'Basket of hot nachos with craft cheese', placeHolder);
    foods.push(chips);
    menuContainer.appendChild(createSection('Foods', foods));
}

export default loadMenu;
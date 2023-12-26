import Logo from '../../assets/harrys-logo.svg'

function createHeaderElem() {
    const element = document.createElement('div');
    element.classList.add("header-container");

    // add logo
    const logo = new Image();
    logo.src = Logo;

    element.appendChild(logo);

    // add content
    const title = document.createElement('h1');
    title.innerHTML = "Harry's Chocolate Shop";

    element.appendChild(title);

    return element;
}

function loadHeader() {
    const contentDiv = document.querySelector('.content');
    contentDiv.appendChild(createHeaderElem());
}

export default loadHeader;
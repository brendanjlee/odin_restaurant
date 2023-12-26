import loadHeader from "./loadHeader";

function createContactCard(name, position, number, email) {
    const element = document.createElement('div');
    element.classList.add('contact-card');

    const nameElem = document.createElement('h2');
    nameElem.innerHTML = name;
    element.appendChild(nameElem);

    const positionElem = document.createElement('p');
    positionElem.innerHTML = position;
    element.appendChild(positionElem);

    const numberElem = document.createElement('p');
    numberElem.innerHTML = number;
    element.appendChild(numberElem);

    const emailElem = document.createElement('p');
    emailElem.innerHTML = email;
    element.appendChild(emailElem);

    return element;
}

function createContactPage(contacts) {
    const element = document.createElement('div');
    element.classList.add('contact-container');

    contacts.forEach(contact => {
        element.appendChild(contact);
    });

    return element;
}

function loadContacts() {
    loadHeader();
    const contentDiv = document.querySelector('.content');

    const contacts = []
    contacts.push(createContactCard('Joe', 'Chef', '130-123-3211', 'joe@jomail.com'));
    contacts.push(createContactCard('Kim', 'Bartender', '123-345-5332', 'kim@gmail.com'));
    contacts.push(createContactCard('John', 'Manager', '321-455-4982', 'john@gmail.com'));

    contentDiv.appendChild(createContactPage(contacts));
}

export default loadContacts;
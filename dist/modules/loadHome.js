import loadHeader from "./loadHeader";

function createReviewElem() {
    const element = document.createElement('div');
    element.classList.add('review-container');

    // add review content
    const content = document.createElement('p');
    content.classList.add('review-content');
    content.innerHTML = 'Harry\'s has the best drinks and food! The drinks will get you\
                drunker than you\'ve ever been and the food will make you want\
                to drink more than ever. This is exactly the kind of place that\
                I would like to return again and again.'

    const author = document.createElement('h5');
    author.innerHTML = '-The Exponent';

    element.appendChild(content);
    element.appendChild(author);

    return element;
}

function createHoursElem() {
    const element = document.createElement('div');
    element.classList.add('hours-container');

    // add HOURS title
    const title = document.createElement('h2');
    title.innerHTML = 'Hours';

    element.appendChild(title);

    // add hours
    const sunday = document.createElement('p');
    sunday.innerHTML = 'Sunday: 10am - 10pm';
    element.appendChild(sunday);

    const monday = document.createElement('p');
    monday.innerHTML = 'Monday: Closed';
    element.appendChild(monday);

    const tuesday = document.createElement('p');
    tuesday.innerHTML = 'Tuesday: Closed';
    element.appendChild(tuesday);

    const wednesday = document.createElement('p');
    wednesday.innerHTML = 'Wednesday: 10am - 11pm';
    element.appendChild(wednesday);

    const thursday = document.createElement('p');
    thursday.innerHTML = 'Thursday: 10am - 11pm';
    element.appendChild(thursday);

    const friday = document.createElement('p');
    friday.innerHTML = 'Friday: 10am - 11pm';
    element.appendChild(friday);

    const saturday = document.createElement('p');
    saturday.innerHTML = 'Saturday: 10am - 11pm';
    element.appendChild(saturday);

    return element;
}

function createLocationElem() {
    const element = document.createElement('div');
    element.classList.add('location-container');

    const title = document.createElement('h2');
    title.innerHTML = 'Location';

    const content = document.createElement('p');
    content.innerHTML = '112 Mitch Daniel Drive, West Lafayette, Indiana';

    element.appendChild(title);
    element.appendChild(content);

    return element;
}

function loadHome() {
    loadHeader();
    const contentDiv = document.querySelector('.content');
    contentDiv.appendChild(createReviewElem());
    contentDiv.appendChild(createHoursElem());
    contentDiv.appendChild(createLocationElem());
}

export default loadHome; 
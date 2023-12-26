import loadContacts from "../dist/modules/loadContacts";
import loadHome from "../dist/modules/loadHome";
import loadMenu from "../dist/modules/loadMenu";

const content = document.querySelector('.content');

function navController() {
    const homebtn = document.querySelector('.homebtn');
    const menubtn = document.querySelector('.menubtn');
    const contactbtn = document.querySelector('.contactbtn');

    homebtn.addEventListener('click', () => {
        clearPage();
        loadHome();
    });

    menubtn.addEventListener('click', () => {
        clearPage();
        loadMenu();
    });

    contactbtn.addEventListener('click', () => {
        clearPage();
        loadContacts();
    });
}

function clearPage() {
    while (content.lastChild) {
        content.removeChild(content.lastChild);
    }
}

navController();
loadHome();
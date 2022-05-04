import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';


const main = new ElementObject('navbar');
main.addComponent(NavbarComponent);

main.updateDOM();

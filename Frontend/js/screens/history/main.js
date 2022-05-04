import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';


const home = new ElementObject('navbar');
home.addComponent(NavbarComponent);

home.updateDOM();
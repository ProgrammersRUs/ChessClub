import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(new NavbarComponent());

const footer = new ElementObject('footer');
footer.addComponent(new NavbarComponent());

navbar.updateDOM();
footer.updateDOM();
import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(NavbarComponent);

const footer = new ElementObject('footer');
footer.addComponent(FooterComponent);

navbar.updateDOM();
footer.updateDOM();
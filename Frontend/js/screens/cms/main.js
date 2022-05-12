import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import AddNewsComponent from"../../components/AddNewsComponent.js"

const navbar = new ElementObject('navbar');
navbar.addComponent(NavbarComponent);

const newsForm = new ElementObject('post-news');
newsForm.addComponent(new AddNewsComponent('derp'));


const footer = new ElementObject('footer');
footer.addComponent(FooterComponent);

navbar.updateDOM();
newsForm.updateDOM();
footer.updateDOM();


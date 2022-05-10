import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import NewsComponent from "../../components/NewsComponent.js";
import FooterComponent from "../../components/FooterComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(NavbarComponent);

const news = new ElementObject('news');
news.addComponent(NewsComponent);


const footer = new ElementObject('footer');
footer.addComponent(FooterComponent);

navbar.updateDOM();
news.updateDOM();
footer.updateDOM();


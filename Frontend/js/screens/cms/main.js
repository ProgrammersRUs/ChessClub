import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import AddNewsComponent from"../../components/AddNewsComponent.js"
import NewsTableComponent from "../../components/NewsTableComponent.js";
import TwoRowComponent from "../../components/TwoRowComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(NavbarComponent);

const newsForm = new ElementObject('post-news');

let news1 = new AddNewsComponent('Nyheder');
let news2 = new NewsTableComponent(await
    fetch(config.endpoints.cms.root+config.endpoints.cms.subPoint.allNews).then(response => response.json()));



let top = new TwoRowComponent('post-news',news1,news2);
newsForm.addComponent(top)

const footer = new ElementObject('footer');
footer.addComponent(FooterComponent);

newsForm.updateDOM();
news1.addEventliseenter()
navbar.updateDOM();
footer.updateDOM();



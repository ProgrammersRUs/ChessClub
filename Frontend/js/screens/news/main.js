import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import NewsComponent from "../../components/NewsComponent.js";
import FooterComponent from "../../components/FooterComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(NavbarComponent);

const news = new ElementObject('news');
news.addComponent(new NewsComponent(await
    fetch(config.endpoints.cms.root+config.endpoints.cms.subPoint.allNews).then(response => response.json())));



const footer = new ElementObject('footer');
footer.addComponent(FooterComponent);

navbar.updateDOM();
news.updateDOM();
footer.updateDOM();


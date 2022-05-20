import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import NewsComponent from "../../components/NewsComponent.js";
import FrontPageNewsWrapperComponent from "../../components/FrontPageNewsWrapperComponent.js";
import PageContentComponent from "../../components/PageContentComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(new NavbarComponent());

const body = new ElementObject('test');

let frontPageNews = new FrontPageNewsWrapperComponent(new NewsComponent(await
    fetch(config.endpoints.cms.root+config.endpoints.cms.subPoint.allNews).then(response => response.json())));
body.addComponent(frontPageNews)

const footer = new ElementObject('footer');
footer.addComponent(new FooterComponent());

let content = new PageContentComponent(await
    fetch(config.endpoints.cms.root+config.endpoints.cms.subPoint.allFrontPages).then(response => response.json()))
body.addComponent(content)

navbar.updateDOM();
footer.updateDOM();
body.updateDOM();

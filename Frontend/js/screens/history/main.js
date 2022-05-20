import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import ImageComponent from "../../components/ImageComponent.js";
import TextComponent from "../../components/TextComponent.js";
import twoColumnComponent from "../../components/TwoColumnComponent.js";
import PageContentComponent from "../../components/PageContentComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(new NavbarComponent());

const footer = new ElementObject('footer');
footer.addComponent(new FooterComponent());

const body = new ElementObject('myContent');


let content = new PageContentComponent(await
    fetch(config.endpoints.cms.root+config.endpoints.cms.subPoint.allAboutUs).then(response => response.json()))

body.addComponent(content)

body.updateDOM()
navbar.updateDOM();
footer.updateDOM();
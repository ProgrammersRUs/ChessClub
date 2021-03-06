import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import PageContentiFrameComponent from "../../components/PageContentiFrameComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(new NavbarComponent());

const body = new ElementObject('myContent');


let content = new PageContentiFrameComponent(await
    fetch(config.endpoints.cms.root+config.endpoints.cms.subPoint.allContactUsPages).then(response => response.json()))

body.addComponent(content)

const footer = new ElementObject('footer');
footer.addComponent(new FooterComponent());

body.updateDOM();
navbar.updateDOM();
footer.updateDOM();
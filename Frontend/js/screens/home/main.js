import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import twoColumnComponent from "../../components/TwoColumnComponent.js";
import TextComponent from "../../components/TextComponent.js";
import ImageComponent from "../../components/ImageComponent.js";
import NewsComponent from "../../components/NewsComponent.js";
import FrontPageNewsWrapperComponent from "../../components/FrontPageNewsWrapperComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(new NavbarComponent());

const body = new ElementObject('test');

let frontPageNews = new FrontPageNewsWrapperComponent(new NewsComponent(await
    fetch(config.endpoints.cms.root+config.endpoints.cms.subPoint.allNews).then(response => response.json())));
body.addComponent(frontPageNews)

const footer = new ElementObject('footer');
footer.addComponent(new FooterComponent());

let frontpageContent = await
    fetch(config.endpoints.cms.root+config.endpoints.cms.subPoint.allFrontPages).then(response => response.json());

for (let content of frontpageContent){
    let image1 = new ImageComponent("aboutImage", content.imageUrl,
        "...");
    let about = new TextComponent("about", content.header, `<p
            className="fst-italic"> ${content.body}</p>`);

    let column1 = new twoColumnComponent('1', about, image1);
    body.addComponent(column1)
}


navbar.updateDOM();
footer.updateDOM();
body.updateDOM();

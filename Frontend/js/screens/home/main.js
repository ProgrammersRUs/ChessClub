import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import twoColumnComponent from "../../components/TwoColumnComponent.js";
import TextComponent from "../../components/TextComponent.js";
import ImageComponent from "../../components/ImageComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(new NavbarComponent());

const body = new ElementObject('test');

let image1 = new ImageComponent("aboutImage", "./img/Haslev%20og%20Faxe%20Skakklub%20-logos_black.png",
    "...");
let about = new TextComponent("about", "Om os", `<p
            className="fst-italic"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>`);

let column1 = new twoColumnComponent('1', about, image1);
body.addComponent(column1);

const footer = new ElementObject('footer');
footer.addComponent(new FooterComponent());


body.updateDOM();
navbar.updateDOM();
footer.updateDOM();
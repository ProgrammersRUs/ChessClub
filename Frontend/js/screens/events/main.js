import ElementObject from "../../lib/ElementObject.js";
import NavbarComponent from "../../components/NavbarComponent.js";
import FooterComponent from "../../components/FooterComponent.js";
import GoogleCalanderComponent from "../../components/GoogleCalanderComponent.js";
import TwoColumnComponent from "../../components/TwoColumnComponent.js";
import TextComponent from "../../components/TextComponent.js";
import NextEventComponent from "../../components/NextEventComponent.js";


const navbar = new ElementObject('navbar');
const footer = new ElementObject('footer');
const body = new ElementObject('body');
navbar.addComponent(new NavbarComponent());
footer.addComponent(new FooterComponent());

let test = {
    title: "Test",
    location: config.locations[0],
    date: "30/02-1920",
    description: "Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event ",
    href: "/",
    imgSrc: ''
}


let nextComponent = new NextEventComponent(test);
let calender = new GoogleCalanderComponent('400px', '100%');
console.log(calender.view())
let left = new TextComponent("test", "test", `<p>test</p>`)
let top = new TwoColumnComponent('top',nextComponent,calender);

body.addComponent(top);



navbar.updateDOM();
body.updateDOM();
footer.updateDOM();
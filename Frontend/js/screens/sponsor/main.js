import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import SponsorComponent from "../../components/SponsorComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(new NavbarComponent());

let sponsorC = new SponsorComponent(await fetch(config.endpoints.cms.root + config.endpoints.cms.subPoint.allSponsers).then(response => response.json()));

const body = new ElementObject('body');
body.addComponent(sponsorC)

const footer = new ElementObject('footer');
footer.addComponent(new FooterComponent());

navbar.updateDOM();
body.updateDOM();
footer.updateDOM();
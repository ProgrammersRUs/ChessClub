import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import SponsorComponent from "../../components/SponsorComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(new NavbarComponent());

let sponsors = [
    {
        name:'Din Tøjmand',
        imgSrc: '',
        description: "Siden 1886 har Din Tøjmand sponsoreret klubberne"
    },
    {
        name:'Netto',
        imgSrc: 'https://www.netto.dk/images/netto_logo-2019--no-circle.svg',
        description: "På hjørnet af hovedgaden ligger Netto, altid med gode tilbud til folket"
    }
]

let sponsorC = new SponsorComponent(sponsors);

const body = new ElementObject('body');
body.addComponent(sponsorC)

const footer = new ElementObject('footer');
footer.addComponent(new FooterComponent());

navbar.updateDOM();
body.updateDOM();
footer.updateDOM();
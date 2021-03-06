import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import MemberOverviewComponent from "../../components/MemberOverviewComponent.js";
import FooterComponent from "../../components/FooterComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(new NavbarComponent());

const memberOverview = new ElementObject('overview');
memberOverview.addComponent(new MemberOverviewComponent(await
    fetch(config.endpoints.member.root+config.endpoints.member.subPoint.getAll).then(response => response.json())));

const footer = new ElementObject('footer');
footer.addComponent(new FooterComponent());

navbar.updateDOM();
memberOverview.updateDOM();
footer.updateDOM();


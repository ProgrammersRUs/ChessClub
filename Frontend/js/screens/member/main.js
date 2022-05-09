import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import MemberOverviewComponent from "../../components/MemberOverviewComponent.js";
import FooterComponent from "../../components/FooterComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(NavbarComponent);

const memberOverview = new ElementObject('overview');
memberOverview.addComponent(MemberOverviewComponent);

const footer = new ElementObject('footer');
footer.addComponent(FooterComponent);

navbar.updateDOM();
memberOverview.updateDOM();
footer.updateDOM();


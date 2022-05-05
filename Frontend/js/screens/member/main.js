import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import MemberOverviewComponent from "../../components/MemberOverviewComponent.js";


const memberOverview = new ElementObject('overview');
memberOverview.addComponent(MemberOverviewComponent);

const home = new ElementObject('navbar');
home.addComponent(NavbarComponent);

home.updateDOM();
memberOverview.updateDOM();
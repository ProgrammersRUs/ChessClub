import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import CmsComponent from "../../components/cms/CmsComponent.js";
import AddNewsComponent from "../../components/cms/forms/AddNewsComponent.js";
import MemberOverviewComponent from "../../components/MemberOverviewComponent.js";
import SponsorTableComponent from "../../components/cms/tables/SponsorTableComponent.js";
import AddEventComponent from "../../components/cms/forms/AddEventComponent.js";
import AddSponsorComponent from "../../components/cms/forms/AddSponsorComponent.js";
import AddAboutUsComponent from "../../components/cms/forms/AddAboutUsComponent.js";
import AddContactUsComponent from "../../components/cms/forms/AddContactUsComponent.js";
import AddFrontPageComponent from "../../components/cms/forms/AddFrontPageComponent.js";

const navbar = new ElementObject('navbar');
navbar.addComponent(new NavbarComponent());
const footer = new ElementObject('footer');
footer.addComponent(new FooterComponent());

const cmsLayout = new ElementObject('cms-layout');

let cmsComponent = new CmsComponent('Nyheder');

cmsLayout.addComponent(cmsComponent)


navbar.updateDOM();
footer.updateDOM();
cmsLayout.updateDOM();

document.getElementById('evnt-link').addEventListener('click', async () => {
        let event1 = new AddEventComponent();
        await event1.refreshPage()
})


document.getElementById('news-link').addEventListener('click', async () => {
        let news1 = new AddNewsComponent();
        await news1.refreshPage()
    }
)

document.getElementById('members-link').addEventListener('click', async () => {
    const memberForm = new ElementObject('cms-content');
    const memberOver = new MemberOverviewComponent(await
        fetch(config.endpoints.member.root+config.endpoints.member.subPoint.getAll).then(response => response.json()));

    memberForm.addComponent(memberOver);
    memberForm.updateDOM();
    memberOver.addEventListenersMemberTable()
    }
)

document.getElementById('sponsor-link').addEventListener('click', async () => {
        let sponsor = new AddSponsorComponent();
        await sponsor.refreshPage();
    }

)
document.getElementById('about-us-link').addEventListener('click', async () => {
    let aboutUsComponent = new AddAboutUsComponent();
    await aboutUsComponent.refreshPage();
})

document.getElementById('frontpage-link').addEventListener('click', async () => {
    let frontPageComponent = new AddFrontPageComponent();
    await frontPageComponent.refreshPage();
})

document.getElementById('contact-us-link').addEventListener('click', async () => {
    let contactUsComponent = new AddContactUsComponent();
    await contactUsComponent.refreshPage();
})

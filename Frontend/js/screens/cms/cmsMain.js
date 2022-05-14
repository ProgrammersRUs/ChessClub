import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import CmsComponent from "../../components/cms/CmsComponent.js";
import AddNewsComponent from "../../components/cms/AddNewsComponent.js";
import NewsTableComponent from "../../components/NewsTableComponent.js";
import TwoRowComponent from "../../components/TwoRowComponent.js";
import MemberOverviewComponent from "../../components/MemberOverviewComponent.js";
import SponsorComponent from "../../components/SponsorComponent.js";
import AddSponsorComponent from "../../components/cms/AddSponsorComponent.js";

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


document.getElementById('news-link').addEventListener('click', async () => {
        const newsForm = new ElementObject('cms-content');

        let news1 = new AddNewsComponent();
        let news2 = new NewsTableComponent(await
            fetch(config.endpoints.cms.root + config.endpoints.cms.subPoint.allNews).then(response => response.json()));
        document.getElementById('cms-content-header').innerText = news1.name;

        let top = new TwoRowComponent('what this name for', news1, news2);
        newsForm.addComponent(top)
        newsForm.updateDOM();
        news1.addEventliseenter()
    }
)

document.getElementById('members-link').addEventListener('click', async () => {
        const memberOverview = new ElementObject('cms-content');
        let memberOverviewComponent = new MemberOverviewComponent(await
            fetch(config.endpoints.member.root + config.endpoints.member.subPoint.getAll).then(response => response.json()));
        document.getElementById('cms-content-header').innerText = memberOverviewComponent.name;
        memberOverview.addComponent(memberOverviewComponent);
        memberOverview.updateDOM();
    }
)

document.getElementById('sponsor-link').addEventListener('click', async () => {
        const sponsorForm = new ElementObject('cms-content');


        let sponsor = new AddSponsorComponent();
        let sponsorC = new SponsorComponent(await fetch(config.endpoints.cms.root + config.endpoints.cms.subPoint.allSponsers).then(response => response.json()));

        document.getElementById('cms-content-header').innerText = sponsor.name;

        let top = new TwoRowComponent('what this name for', sponsor, sponsorC);
        sponsorForm.addComponent(top)
        sponsorForm.updateDOM();
        sponsor.addEventliseenter()
    }
)


import ElementObject from '../../lib/ElementObject.js';
import NavbarComponent from '../../components/NavbarComponent.js';
import FooterComponent from "../../components/FooterComponent.js";
import CmsComponent from "../../components/cms/CmsComponent.js";
import AddNewsComponent from "../../components/cms/AddNewsComponent.js";
import NewsTableComponent from "../../components/NewsTableComponent.js";
import TwoRowComponent from "../../components/TwoRowComponent.js";

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


document.getElementById('news-link').addEventListener('click', async()=> {
    const newsForm = new ElementObject('cms-content');

    let news1 = new AddNewsComponent('Nyheder');
    let news2 = new NewsTableComponent(await
    fetch(config.endpoints.cms.root+config.endpoints.cms.subPoint.allNews).then(response => response.json()));

    let top = new TwoRowComponent('what this name for',news1,news2);
    newsForm.addComponent(top)
    newsForm.updateDOM();
    news1.addEventliseenter()
})

import Component from "../lib/Component.js";
import imageComponent from "./ImageComponent.js";
import textComponent from "./TextComponent.js";
import TwoColumnComponent from "./TwoColumnComponent.js";


class SponsorComponent extends Component{
    constructor(sponsors) {
        super('sponsors', sponsors, (state) =>
            `
            <div class="container min-vh-100">
                ${this.#renderSponsors(state)}           
           </div>
            `
        );
    }

    #renderSponsors(sponsors){
        return sponsors.map(sponsor => this.#renderSponsor(sponsor)).join('');
    }

    #renderSponsor(sponsor){
        let sponsorImg = new imageComponent(sponsor.name, sponsor.imgSrc, sponsor.name);
        let sponsorText = new textComponent(sponsor.name, sponsor.name, sponsor.description);

        let merged = new TwoColumnComponent(sponsor.name, sponsorText, sponsorImg).view();
        return merged;
    }
}

export default SponsorComponent
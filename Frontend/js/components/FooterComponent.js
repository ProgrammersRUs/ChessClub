import Component from "../lib/Component.js";


class FooterComponent extends Component {
    constructor() {
        let state = {
            name: config.club.name,
            year: config.club.copyrightYear,
            location: config.locations
        }
        super("footer", state, (state) => `
<div class="container mt-4">
<div class="row featurette-divider">
    <div class="col-lg-6 order-last order-lg-first">
        <p class="float-right"><a href="#">Tilbage til toppen</a></p>
        <p>© ${state.year} ${state.name}· <a href="/privatliv.html">Privacy</a> · <a
            href="/legal.html">Terms</a></p>
    </div>
    <div class="col-lg-6 order-first order-lg-last">
        <div class="row">
            <div class="col-6 ">
                <div class="mb-2 text-center">
                <h5>${state.location[0].name}</h5>
                <p>${state.location[0].address}</p>
                </div>
            </div>
            <div class="col-6 ">
                <div class="mb-2 text-center">
                    <h5>${state.location[1].name}</h5>
                    <p>${state.location[1].address}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
`);

    }
}

export default FooterComponent;
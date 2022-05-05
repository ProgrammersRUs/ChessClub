import Component from "../lib/Component.js";

const footerTemplate = (state) => `
<div class="container">
<div class="row">
    <div class="col-lg-6 order-last order-lg-first">
        <p class="float-right"><a href="/#">Tilbage til toppen</a></p>
        <p>© ${state.year} ${state.name}· <a href="/privatliv.html">Privacy</a> · <a
            href="/legal.html">Terms</a></p>
    </div>
    <div class="col-lg-6 order-first order-lg-last">
        <div class="row">
            <div class="col-6 ">
                <div class="mb-2 text-center">
                <h5>${state.klubber[0].name}</h5>
                <p>${state.klubber[0].address}</p>
                </div>
            </div>
            <div class="col-6 ">
                <div class="mb-2 text-center">
                    <h5>${state.klubber[1].name}</h5>
                    <p>${state.klubber[1].address}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`;

const FooterComponent = new Component('footer', {
    name: 'Haslev og Faxe Skakklub',
    year: new Date().getFullYear(),
    klubber: {
        0: {
            name: "Haslev Skakklub",
            address: 'Søndergade 12, 4690 Haslev'
        },
        1: {
            name: "Faxe Skakklub",
            address: 'Præstøvej 2A, 4640 Faxe'
        }
    }
}, footerTemplate)


export default FooterComponent;
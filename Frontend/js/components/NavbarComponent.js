import Component from '../lib/Component.js'

class NavbarComponent extends Component{
    constructor() {
        let state = {
            name: config.club.name,
            logoSrc: config.club.logoSrc,
            links: config.navbarData.navItems
        }
        super("navbar", state, (state) => `
<div class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img style="max-height: 50px; max-width: 50px" src="${state.logoSrc}"
                 alt="..">
        </a>
        <a class="navbar-brand d-none d-sm-block" href="/">${state.name}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle Navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-2">
                ${this.renderLinks(state.links)}
            </ul>
        </div>
    </div>
</div>
`);
    }

    renderLinks(links) {
        return links.map(link =>
            `
                    <li class="nav-item">
                        <a class="nav-link" href="${link.href}">${link.name}</a>
                    </li>
                `
        ).join('');

    }
}

export default NavbarComponent;
import Component from '../lib/Component.js'

const navbarTemplate = (state) => `
<nav class="navbar sticky-top navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img style="max-height: 50px; max-width: 50px" src="../img/Haslev%20og%20Faxe%20Skakklub%20-logos_black.png"
                 alt="..">
        </a>
        <a class="navbar-brand" href="/">Haslev og Faxe skakklub</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle Navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-2">
                <li class="nav-item">
                    <a class="nav-link" href="${state.links[0].href}">${state.links[0].name}</a>
                </li>              
                 <li class="nav-item">
                    <a class="nav-link" href="${state.links[1].href}">${state.links[1].name}</a>
                </li>                
                <li class="nav-item">
                    <a class="nav-link" href="${state.links[2].href}">${state.links[2].name}</a>
                </li>                
                <li class="nav-item">
                    <a class="nav-link" href="${state.links[3].href}">${state.links[3].name}</a>
                </li>                
                <li class="nav-item">
                    <a class="nav-link" href="${state.links[4].href}">${state.links[4].name}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="${state.links[5].href}">${state.links[5].name}</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

export const NavbarComponent = new Component('navbar', {
    links: {
        0: {
            name: 'Events',
            href: '../events.html'
        },
        1: {
            name: 'Om Klubben',
            href: '../history.html'
        },
        2: {
            name: 'Medlemskab',
            href: '../medlemskab.html'
        },
        3: {
            name: 'Om klubben',
            href: '../history.html'
        },
        4: {
            name: 'Kontakt os',
            href: '../contact2.html'
        },
        5: {
            name: 'Sponserer',
            href: '../sponser.html'
        }
    }
},navbarTemplate);

export default NavbarComponent;
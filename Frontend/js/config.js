const config = {
    club: {
        name: 'Haslev og Faxe skakklubber',
        logoSrc: '../img/Haslev og Faxe Skakklubber-logos_black.png',
        copyrightYear: 2022
    },
    navbarData: {
        navItems: [
            {
                name: 'Events',
                href: '../html/events.html'
            },
            {
                name: 'Om Klubben',
                href: '../html/history.html'
            },
            {
                name: 'Medlemskab',
                href: '../html/medlemskab.html'
            },
            {
                name: 'Kontakt os',
                href: '../html/contact.html'
            },
            {
                name: 'Sponserer',
                href: '../html/sponsor.html'
            }
            ,
            {
                name: 'Medlems Oversigt',
                href: '../html/memberoverview.html'
            }
            ,
            {
                name: 'Admin',
                href: '../html/cms-page.html'
            }
        ]
    },
    locations: [
        {
            name: "Haslev Skakklub",
            address: 'Søndergade 12, 4690 Haslev'
        },
        {
            name: "Faxe Skakklub",
            address: 'Præstøvej 2A, 4640 Faxe'
        }
    ],
    endpoints: {
        member: {
            root: 'http://localhost:8080/',
            subPoint: {
                getAll: 'member/all-members'
            }
        },
        cms: {
            root: 'http://localhost:8089/',
            subPoint: {
                allNews: 'news/all-news',
                allSponsers: 'sponsor/get-all',
                allEvents: 'event/all-events',
                postNews: 'news/new',
                postSponsor: 'sponsor/new',
                postEvent: 'event/createEvent',
                deleteNews: 'news/',
                deleteEvent: 'event',
                postAboutUs:'about-page/new',
                allAboutUs: 'about-page/all-about-pages',
                deleteAboutUs: 'about-page/',
                postFrontPage:'front-page/new',
                allFrontPages:'front-page/all-frontpages',
                deleteFrontPage: 'front-page/',
                postContactUs: 'contact-us-page/new',
                allContactUsPages:'contact-us-page/all-contactus-pages',
                deleteContactUs: 'contact-us-page/',
            }

        }

    }
}

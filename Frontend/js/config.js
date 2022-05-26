const config = {
    club: {
        name: 'Haslev og Faxe skakklubber',
        logoSrc: '../img/Udklip2-hvid-removebg-preview.png',
        copyrightYear: 2022
    },
    navbarData: {
        navItems: [
            {
                name: 'Begivenheder',
                href: '../html/events.html'
            },
            {
                name: 'Online Skak',
                href: '../html/club-site.html'
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
                name: 'Sponsorer',
                href: '../html/sponsor.html'
            }
            ,
            {
                name: 'Klubbernes historie',
                href: '../html/history.html'
            },
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
            root: 'https://hofsk.azurewebsites.net/',
            subPoint: {
                getAll: 'member/all-members',
                deleteMember: 'member/delete/',
                updateMember: 'member/update/'
            }
        },
        cms: {
            root: 'https://cmsbackend420.azurewebsites.net/',
            subPoint: {
                allNews: 'news/all-news',
                allSponsers: 'sponsor/get-all',
                allEvents: 'event/all-events',
                postNews: 'news/new',
                postSponsor: 'sponsor/new',
                deleteSponsor: 'sponsor/',
                postEvent: 'event/createEvent',
                deleteNews: 'news/',
                deleteEvent: 'event/',
                postAboutUs:'about-page/new',
                allAboutUs: 'about-page/all-about-pages',
                deleteAboutUs: 'about-page/',
                postFrontPage: 'front-page/new',
                allFrontPages: 'front-page/all-frontpages',
                deleteFrontPage: 'front-page/',
                postContactUs: 'contact-us-page/new',
                allContactUsPages: 'contact-us-page/all-contactus-pages',
                deleteContactUs: 'contact-us-page/',
            }

        }

    }
}

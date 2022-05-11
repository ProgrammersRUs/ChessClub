const config = {
    club: {
        name: 'Haslev og Faxe skakklubber',
        logoSrc: '../img/Haslev%20og%20Faxe%20Skakklub%20-logos_black.png',
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
                href: '../html/contact2.html'
            },
            {
                name: 'Sponserer',
                href: '../html/sponser.html'
            }
            ,
            {
                name: 'Medlems Oversigt',
                href: '../html/memberoverview.html'
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
    endpoints:{
        member:{
            root: 'http://localhost:8080/',
            getAll: 'member/all-members'
        }

    }
}
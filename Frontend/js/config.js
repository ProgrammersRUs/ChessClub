const config = {
    club: {
        name: 'Haslev og Faxe skakklub',
        logoSrc: '../img/Haslev%20og%20Faxe%20Skakklub%20-logos_black.png',
        copyrightYear: 2022
    },
    navbarData: {
        navItems: [
            {
                name: 'Events',
                href: '../events.html'
            },
            {
                name: 'Om Klubben',
                href: '../history.html'
            },
            {
                name: 'Medlemskab',
                href: '../medlemskab.html'
            },
            {
                name: 'Kontakt os',
                href: '../contact2.html'
            },
            {
                name: 'Sponserer',
                href: '../sponser.html'
            }
            ,
            {
                name: 'Medlems Oversigt',
                href: '../memberoverview.html'
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
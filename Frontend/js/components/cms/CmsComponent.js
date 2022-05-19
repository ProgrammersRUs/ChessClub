import Component from "../../lib/Component.js";

class CmsComponent extends Component {

    constructor(body) {
        let state = {
            body: body
        }

        super('cms-layout', state, (state) =>
            `
    <div class="d-md-flex myWrapper" id="wrapper">
        <!-- Sidebar-->
        <div class="border-end bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading border-bottom bg-light">Kontrol panel</div>
            <div class="list-group list-group-flush">
                <a class="list-group-item list-group-item-action list-group-item-light p-3" id="evnt-link">Events</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" id="news-link">Nyheder</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" id="members-link">Medlems
                    oversigt</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" id="sponsor-link">Sponsorer</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" id="frontpage-link">Forside</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" id="about-us-link">Om os</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" id="contact-us-link">Kontakt os</a>
            </div>
        </div>

        <!-- Page content wrapper-->
        <div id="page-content-wrapper container" class="h-100 w-100">
            <!-- Top navigation-->
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div class="container-fluid">
                    <h4 class="toast-header" style="font-size: xxx-large" id="cms-content-header">Admin</h4>
                </div>
            </nav>

            <!-- Page content-->
            <div class="container-fluid h-100">

                <section id="cms-content" class="h-100">

                </section>

            </div>

        </div>

    </div>
`);
    }

}


export default CmsComponent;


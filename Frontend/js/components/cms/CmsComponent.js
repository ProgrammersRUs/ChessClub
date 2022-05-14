import Component from "../../lib/Component.js";

class CmsComponent extends Component{

    constructor(body) {
        let state = {
            body: body
        }

        super('cms-layout', state, (state)=>
            `
    <div class="d-flex myWrapper" id="wrapper">
        <!-- Sidebar-->
        <div class="border-end bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading border-bottom bg-light">Kontrol panel</div>
            <div class="list-group list-group-flush">
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" id="news-link">Nyheder</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Medlems
                    oversigt</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Sponsorer</a>
            </div>
        </div>

        <!-- Page content wrapper-->
        <div id="page-content-wrapper container" class="h-100 w-100">
            <!-- Top navigation-->
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div class="container-fluid">
                    <h4 class="toast-header" style="font-size: xxx-large">Admin</h4>
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


import Component from "../../../lib/Component.js";
import AddFronPageComponent from "../forms/AddFrontPageComponent.js";
import addFrontPageComponent from "../forms/AddFrontPageComponent.js";

class FrontPageTableComponent extends Component {

    constructor(frontPage) {
        let state = {
            frontPage: frontPage
        }
        super('frontpage', state, (state) =>
            `

            <div class="row mx-w-1003">
                <div class="container-fluid">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Overskrift</th>
                            <th scope="col">Dato oprettet:</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
            ${this.renderPosts(state.frontPage)}
          
                        </tbody>
                    </table>
                </div>

            </div>
            

`)

    }


    renderPosts(frontpage) {


        return frontpage.map(frontPage => `
                            <tr>
                                <td id="fp-id${frontPage.id}"class="d-none">${frontPage.id}</td>
                                <td id="frontpageHeader${frontPage.id}" contenteditable="true">${frontPage.header}</td>
                                <td>${frontPage.creationDate}</td>
                                <td class="accordion-item col-2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${frontPage.id}" aria-expanded="true"
                                            aria-controls="collapse${frontPage.id}"> Se mere
                                    </button>
                                </td>
                                <td class="col-md-2">
                                <button id="deletePost${frontPage.id}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                <button id="updatePostInformation${frontPage.id}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-save"></i> </button>
                                <button id="updatePostStatus${frontPage.id}"  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i ${this.isActivePost(frontPage)}></i> </button>
                            </td>
                            </tr>
                            <tr id="collapse${frontPage.id}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td id="frontpageBody${frontPage.id}" contenteditable="true" class="accordion-body" colspan="3">
                                    ${frontPage.body}
                                </td>
                            </tr>

`
        ).join('')


    }

    isActivePost(frontpage) {
        if (frontpage.isActive == true) {
            return 'class="fa fa-eye"'
        } else {
            return 'class="fa fa-eye-slash"'
        }
    }


    addEventListenersPostTable() {

        const url = config.endpoints.cms.root + config.endpoints.cms.subPoint.deleteFrontPage;
        this.state.frontPage.forEach(frontpage => {

            const buttonDelete = document.getElementById('deletePost' + frontpage.id)
            const buttonUpdateStatus = document.getElementById('updatePostStatus' + frontpage.id)
            const buttonUpdateInformation = document.getElementById('updatePostInformation' + frontpage.id)
            console.log(buttonUpdateStatus)

            buttonDelete.addEventListener("click", async () => {
                await deletePost(frontpage)
                await new AddFronPageComponent().refreshPage()
            })

            buttonUpdateStatus.addEventListener("click", async () => {
                await updatePostStatus(frontpage)
                await new addFrontPageComponent().refreshPage()
            })

            buttonUpdateInformation.addEventListener("click", async () => {
                await updatePostInformation(frontpage)
                await new addFrontPageComponent().refreshPage()
            })
        })


        async function deletePost(frontPage) {

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                frontPage: {
                    id: frontPage.id
                }
            }

            const fetchOptions = {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            ;

            const response = await fetch(url + frontPage.id, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }

        async function updatePostInformation(frontPage) {

            const postHeader = document.getElementById('frontpageHeader' + frontPage.id).innerText
            const postBody = document.getElementById('frontpageBody' + frontPage.id).innerText

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                frontPage: {
                    id: frontPage.id,
                    header: postHeader,
                    body: postBody,
                    creationDate: frontPage.creationDate,
                    imgUrl: frontPage.imgUrl,
                    isActive: frontPage.isActive
                }
            }

            console.log(body)
            const fetchOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url + frontPage.id, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }

        async function updatePostStatus(frontPage) {

            if (frontPage.isActive == 1) {
                frontPage.isActive = 0
            } else if (frontPage.isActive == 0) {
                frontPage.isActive = 1
            }

            console.log(frontPage.isActive)

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                frontPage: {
                    id: frontPage.id,
                    header: frontPage.header,
                    body: frontPage.body,
                    creationDate: frontPage.creationDate,
                    imgUrl: frontPage.imgUrl,
                    isActive: frontPage.isActive
                }
            }

            console.log(body)
            const fetchOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url + frontPage.id, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }


    }


}

//document.getElementById('flexSwitchCheckChecked').addEventListener("change", () => console.log(document.getElementById('flexSwitchCheckChecked').checked) )

export default FrontPageTableComponent;
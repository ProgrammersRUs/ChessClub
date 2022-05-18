import Component from "../../../lib/Component.js";
import AddContactUsComponent from "../forms/AddContactUsComponent.js";

class ContactUsTableComponent extends Component {

    constructor(contactUsPage) {
        let state = {
            contactUsPage: contactUsPage
        }
        super('contactUsPage', state, (state) =>
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
            ${this.renderPosts(state.contactUsPage)}
          
                        </tbody>
                    </table>
                </div>

            </div>
            

`)

    }


    renderPosts(contactUsPage) {


        return contactUsPage.map(contactuspage => `
                            <tr>
                                <td id="contactus-id${contactuspage.id}"class="d-none">${contactuspage.id}</td>
                                <td>${contactuspage.header}</td>
                                <td>${contactuspage.creationDate}</td>
                                <td class="accordion-item col-2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${contactuspage.id}" aria-expanded="true"
                                            aria-controls="collapse${contactuspage.id}"> Se mere
                                    </button>
                                </td>
                                <td class="col-md-2">
                                <button id="deletePost${contactuspage.id}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                <button  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                <button id="updatePostStatus${contactuspage.id}"  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i ${this.isActivePost(contactuspage)}></i> </button>
                            </td>
                            </tr>
                            <tr id="collapse${contactuspage.id}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td class="accordion-body" colspan="3">
                                    ${contactuspage.body}<
                                </td>
                            </tr>

`
        ).join('')


    }

    isActivePost(contactUsPage) {
        if (contactUsPage.isActive == true) {
            return 'class="fa fa-eye"'
        } else {
            return 'class="fa fa-eye-slash"'
        }
    }


    addEventListenersPostTable() {

        const url = config.endpoints.cms.root + config.endpoints.cms.subPoint.deleteContactUs;
        this.state.contactUsPage.forEach(contactUs => {

            const buttonDelete = document.getElementById('deletePost' + contactUs.id)
            const buttonUpdateStatus = document.getElementById('updatePostStatus' + contactUs.id)
            console.log(buttonUpdateStatus)

            buttonDelete.addEventListener("click", async () => {
                await deletePost(contactUs)
                await new AddContactUsComponent().refreshPage()
            })

            buttonUpdateStatus.addEventListener("click", async () => {
                await updatePostStatus(contactUs)
                await new AddContactUsComponent().refreshPage()
            })
        })


        async function deletePost(contactUs) {

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                contactUsPage: {
                    id: contactUs.id
                }
            }

            const fetchOptions = {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            ;

            const response = await fetch(url + contactUs.id, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }

        async function updatePostStatus(contactUs) {

            if (contactUs.isActive == 1) {
                contactUs.isActive = 0
            } else if (contactUs.isActive == 0) {
                contactUs.isActive = 1
            }

            console.log(contactUs.isActive)

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                contactUsPage: {
                    id: contactUs.id,
                    header: contactUs.header,
                    body: contactUs.body,
                    creationDate: contactUs.creationDate,
                    imgUrl: contactUs.imgUrl,
                    isActive: contactUs.isActive
                }
            }

            console.log(body)
            const fetchOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url + contactUs.id, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }


    }


}

//document.getElementById('flexSwitchCheckChecked').addEventListener("change", () => console.log(document.getElementById('flexSwitchCheckChecked').checked) )

export default ContactUsTableComponent;
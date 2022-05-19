import Component from "../../../lib/Component.js";
import AddAboutUsComponent from "../forms/AddAboutUsComponent.js";

class AboutUsTableComponent extends Component {

    constructor(aboutUs) {
        let state = {
            aboutUs: aboutUs
        }
        super('aboutUs', state, (state) =>
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
            ${this.renderAboutUsPosts(state.aboutUs)}
          
                        </tbody>
                    </table>
                </div>

            </div>
            

`)

    }


    renderAboutUsPosts(aboutUsList) {


        return aboutUsList.map(aboutUs => `
                            <tr>
                                <td id="postId${aboutUs.id}"class="d-none">${aboutUs.id}</td>
                                <td>${aboutUs.header}</td>
                                <td>${aboutUs.creationDate}</td>
                                <td class="accordion-item col-2">
                                
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${aboutUs.id}" aria-expanded="true"
                                            aria-controls="collapse${aboutUs.id}"> Se mere
                                    </button>
                                </td>
                                <td class="col-md-2">
                                <button id="deletePost${aboutUs.id}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                <button  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                <button id="updatePostStatus${aboutUs.id}"  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i ${this.isActivePost(aboutUs)}></i> </button>
                            </td>
                            </tr>
                            <tr id="collapse${aboutUs.id}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td class="accordion-body" colspan="3">
                                    ${aboutUs.body}
                                </td>
                            </tr>

`
        ).join('')


    }

    isActivePost(post) {
        if (post.isActive == true) {
            return 'class="fa fa-eye"'
        } else {
            return 'class="fa fa-eye-slash"'
        }
    }


    addEventListenersPostsTable() {

        const url = config.endpoints.cms.root + config.endpoints.cms.subPoint.deleteAboutUs;
        this.state.aboutUs.forEach(about => {

            const buttonDelete = document.getElementById('deletePost' + about.id)
            const buttonUpdateStatus = document.getElementById('updatePostStatus' + about.id)
            console.log(buttonUpdateStatus)

            buttonDelete.addEventListener("click", async () => {
                await deletePost(about)
                await new AddAboutUsComponent().refreshPage()
            })

            buttonUpdateStatus.addEventListener("click", async () => {
                await updateStatusPost(about)
                await new AddAboutUsComponent().refreshPage()
            })
        })


        async function deletePost(post) {

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                aboutPage: {
                    id: post.id
                }
            }

            const fetchOptions = {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            ;

            const response = await fetch(url + post.id, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }

        async function updateStatusPost(post) {

            if (post.isActive == 1) {
                post.isActive = 0
            } else if (post.isActive == 0) {
                post.isActive = 1
            }

            console.log(post.isActive)

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                aboutPage: {
                    id: post.id,
                    creationDate: post.creationDate,
                    header: post.header,
                    body: post.body,
                    imgUrl: post.imgUrl,
                    isActive: post.isActive
                }
            }

            console.log(body)
            const fetchOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url + post.id, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }
    }
}

export default AboutUsTableComponent;
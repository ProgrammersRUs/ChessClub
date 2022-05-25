import Component from "../../../lib/Component.js";
import ElementObject from "../../../lib/ElementObject.js";
import TwoRowComponent from "../../TwoRowComponent.js";
import FrontPageTableComponent from "../tables/FrontPageTableComponent.js";

class AddFrontPageComponent extends Component {

    constructor() {
        let state = {}

        super('Forside', state, (state) =>
            `<div class="row mx-w-100 h-100">
            <div class="card col-sm m-1 d-block" style="background-color: rgba(217, 226, 249, 0.3);">
                <div class="card-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Overskrift: </span>
                        <input id="postHeader" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
          
                    <div class="input-group h-50 mb-3">
                        <span class="input-group-text ">Indlæg tekst: </span>
                        <textarea id="postBody" class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="row">
                     <div class="col-6">
                     
                     <div class="mb-3">
                       <input type="file" class="visually-hidden" id="imageForm">
                       <label for="imageForm" class="btn btn-primary">Vælg Billede</label>
                    </div>
                    </div>
                     <div class="col-6">                  
                    <div class="form-check form-switch float-end">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Publicer indlæg</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    </div>
                    </div>
                    </div>
                    <button type="button" class="btn btn-primary" id="submitPost">Opret nyt indlæg</button>
                           
                    </div>
                    </div>
            
                  
                </div>
            </div>
        </div>
`);
    }


    addEventlisenterToContent() {
        const url = config.endpoints.cms.root + config.endpoints.cms.subPoint.postFrontPage
        const button = document.getElementById('submitPost')


        button.addEventListener("click", async () => {
            let imgUrl = await uploadPicture();
            await postFrontPage(url, imgUrl);
            await this.refreshPage();
        })


        async function uploadPicture() {
            const input = document.getElementById('imageForm');
            let data = new FormData();

            data.append('file', input.files[0]);
            let user = sessionStorage.getItem('user');

            data.append('user', new Blob([user],{type : "application/json"}));


            let response = await fetch(config.endpoints.cms.root + "blob/upload", {
                method:'POST',
                body:data
            }).then(response => response.text());


            console.log(response);
            return response;

        }

        async function postFrontPage(url, imgSrc) {
            const frontPageHeader = document.getElementById('postHeader').value
            const frontPageBody = document.getElementById('postBody').value
            //const postImage = document.getElementById('postImage').value
            const frontPageIsActive = document.getElementById('flexSwitchCheckChecked')
            let isActive = 0

            if (frontPageIsActive.checked) {
                isActive = 1
            }

            let body = {
                user: JSON.parse(sessionStorage.getItem("user")),
                frontPage: {
                    creationDate: new Date().toLocaleDateString('en-CA'),
                    header: frontPageHeader,
                    body: frontPageBody,
                    imgUrl: imgSrc,
                    isActive: isActive
                }
            }
            const fetchOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url, fetchOptions);
            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
            return response;

        }
    }

    async refreshPage() {
        const frontPageForm = new ElementObject('cms-content');

        let cmsBottom = new FrontPageTableComponent(await
            fetch(config.endpoints.cms.root + config.endpoints.cms.subPoint.allFrontPages).then(response => response.json()));
        document.getElementById('cms-content-header').innerText = this.name;

        let cmsBody = new TwoRowComponent('what this name for', this, cmsBottom);
        frontPageForm.addComponent(cmsBody)
        frontPageForm.updateDOM();
        cmsBottom.addEventListenersPostTable()
        this.addEventlisenterToContent()
    }
}


export default AddFrontPageComponent;


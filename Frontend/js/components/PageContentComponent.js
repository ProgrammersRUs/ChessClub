import Component from "../lib/Component.js";

class PageContentComponent extends Component{

    constructor(content) {
        let state = {
            content: content
        }
        super('news', state, (state) =>
            this.renderNews(state.content));
    }

    renderNews(content) {

        return content.filter(post => post.isActive == true).map(post =>  `
<div class="row featurette">
        <div class="col-md-7">
            <h2 class="featurette-heading">${post.header} <span class="text-muted"></span></h2>
            <p class="lead">${post.body}</p>

        </div>
        <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto"

                    alt="500x500" style="width: 500px; height: 500px;"
                 src="${post.imgUrl}"
                   data-holder-rendered="true"
                width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </img>
        </div>
    </div>
        <hr class="featurette-divider">
`
        ).join('')
    }
}

//document.getElementById('flexSwitchCheckChecked').addEventListener("change", () => console.log(document.getElementById('flexSwitchCheckChecked').checked) )

export default PageContentComponent;
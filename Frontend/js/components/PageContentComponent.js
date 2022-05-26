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



<div class="container marketing mt-3" id="myContent">
 <div class="container"> <!--original -->
  <div class="col-md-12">
   <div style="margin-top: 5px">
    <h2 class="featurette-heading">${post.header} <span class="text-muted"></span></h2>
   </div>
   <div class="row featurette">
    <div class="col-md-7">
     <p>${post.body}</p>
    </div>
    <div class="col-md-5">
     <img class="featurette-image img-fluid mx-auto" alt="500x500" style="width: 500px; height: 500px;" src="${post.imgUrl}"
     data-holder-rendered="true" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
     referrerpolicy="no-referrer-when-downgrade">
    </div>
   </div>
   <hr class="featurette-divider">
  </div>
 </div>
</div>

`
        ).join('')
    }
}

//document.getElementById('flexSwitchCheckChecked').addEventListener("change", () => console.log(document.getElementById('flexSwitchCheckChecked').checked) )

export default PageContentComponent;
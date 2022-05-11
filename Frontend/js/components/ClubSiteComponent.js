import Component from "../lib/Component.js";

class ClubSiteComponent extends Component{
    constructor(event) {
        let state = {
            title: event.title,
            location: event.location,
            body: event.description,
            link: event.href,
            img: event.imgSrc
        }
        super('nextEvent', state, (state) =>
            `
      <div class="mb-2 border border-primary rounded h-100">
         <div class="row h-75">
            <div class="col-sm-8 h-100">
          
                  <strong>${state.title}</strong>
               </p>
               <p>${state.body}</p>

            </div>
            <div class="col-4">
               <picture class="d-none d-sm-block mw-100 position-relative overflow-hidden w-auto" style="max-height: 240px;">
                  <img style="max-height: 100%; max-width: 100%;" src="https://via.placeholder.com/400x400/FFB6C1/000000" alt="https://via.placeholder.com/400x400/FFB6C1/000000">
               </picture>
            </div>
         </div>
                     <div class="row h-25">
                <div class="col-md-8">
                    <p>${state.location.name}</p>
                    <p>${state.location.address}</p>                
                </div>
                <div class="col-md-4">
                    <div class="w-100 h-100 btn"><a href="${state.link}" class=" btn-primary btn-sm">Læs mere</a>
               </div>
                </div>
            </div>
      </div>
                        
            `
        );
    }

}
export default ClubSiteComponent
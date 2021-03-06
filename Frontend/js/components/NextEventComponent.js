import Component from "../lib/Component.js";

class NextEventComponent extends Component{
    constructor(event) {
        let state;
        if(event != undefined){
        state = {
            title: event.title,
            location: event.location,
            date: event.localDate,
            body: event.description,
            link: event.href,
            img: event.imgSrc
        }
        }
        else {
            state = {
                title: 'Intet at vise',
                date: new Date().toLocaleDateString(),
                body: "",
                location: ""
            }
        }
        super('nextEvent', state, (state) =>
            `
      <div class="mb-2 border rounded h-100">
         <div class="row h-75">
            <div class="col-sm-8 h-100">
               <p class="m-2">
                  <span class="text-lg">${state.date}</span></p>
               <p class="m-2">
                  <strong>${state.title}</strong>
               </p>
               <p class="m-2">${state.body}</p>

            </div>
            <div class="col-4">
               <picture class="d-none d-sm-block mw-100 position-relative overflow-hidden w-auto" style="max-height: 240px;">
                  <img style="max-height: 100%; max-width: 100%;" src="${this.imageFallback(state.img)}" alt="">
               </picture>
            </div>
         </div>
                     <div class="row h-25">
                <div class="col-md-8">
                    <p>${state.location}</p>           
                </div>
                <div class="col-md-4">
                    <button class="btn button-custom">Tilmeld </button>
                </div>
            </div>
      </div>
                        
            `
        );
    }

}

export default NextEventComponent
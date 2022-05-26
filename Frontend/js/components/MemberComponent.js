import Component from "../lib/Component.js";

class MemberComponent extends Component {
    constructor(event) {
        let state = {
            month: event.month,
            userName: event.userName,
            joined: event.memberJoined
        }

        super('nextEvent', state, (state) =>
            `
            <section id="members" class="mb-1 mt-1 d-none d-lg-block">
 
        <div class="d-flex justify-content-center mb-3">
                 <h3 class="mb-2">Mød medlemmerne</h3>
        </div> <!-- flyt den her linje ned under renderMembers og slet den næste linje, for at 
        få "Mød medlemmerne" tilbage ud i venstre side-->
         <div class="d-flex justify-content-center">

        </div>
        <div class="container">
        
        <div class="carousel slide" id="TESTWOW" data-bs-ride="carousel">
            <div class="carousel-inner">  
                ${this.renderCarrousel(state.month)}
             </div>
            </div>
        </div>

           </section>
      `)
    }

    addEventListenersToMe() {
        let myCarousel = document.getElementById('TESTWOW');
        let carousel = new bootstrap.Carousel(myCarousel);
        let config = {interval: 1000}

        console.log(carousel._getConfig(config))

    }

    renderCarrousel(state) {
        console.log(state)
        let rowSize = 4;

        let split = [];
        for (let i = 0; i < state.length; i += rowSize) {
            let endpoint = i + rowSize
            if (endpoint > state.length) {
                endpoint = state.length;
            }
            console.log(endpoint)
            split.push(state.slice(i, endpoint));
        }

        let template = `
            <div class="carousel-item active">
                <div class="row">
                            ${this.renderMembers(split[0])}
                </div>
            </div>
            ${this.renderAdditionalCarouselItem(split.splice(1,split.length))}        
        `
        return template;
    }


    renderAdditionalCarouselItem(array){
        return  array.map(array => `
            <div class="carousel-item">
                <div class="row">
                    ${this.renderMembers(array)}
                </div>
            </div>
            `).join("")
    }

    renderMembers(month) {
        return month.map(month => `
 <div class="col-lg-3 text-center mb-2 ">
  <div class="d-flex justify-content-center">
   <div>
    <div style="height: 100px; width: 100px; background-color: #9DB4AB; border-radius: 25rem">
    </div>
   </div>
    <div>
    <br>
    <a class="link-custom" href="https://www.chess.com/member/${month.username}">
     <h5>${month.username}</h5>
    </a>
    <!-- <p>Rating: 1253</p>-->
    <p>${month.joined}</p>
   </div>
  </div>
 </div>
`
        ).join('');
    }
}

export default MemberComponent
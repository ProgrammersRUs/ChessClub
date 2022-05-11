import Component from "../lib/Component.js";

class FrontPageNewsWrapperComponent extends Component{
    constructor(news) {
        if(news.state.news > 3){

        }

        let state = {
            news: news

        }
        super('lastest news', state, (state) =>
            `
                <div class="container-fluid">
                    <div class="row" id="news">
                      ${state.news.view()}  
                    </div>
                </div>      
            `
        );
    }

}

export default FrontPageNewsWrapperComponent;
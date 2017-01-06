import {Component} from "angular2/core";
import {TweetsComponent} from "./tweets.component";

@Component({
    selector: 'my-app',
    template: `
            <div class="title"><h1><i class="glyphicon glyphicon-screenshot"></i><b>Ngitter</b></h1></div>
            <tweets></tweets>
        `,
    styles: [
        `
            .title{
                text-align: center;
                vertical-align: middle;
                line-height: 100%
            }
            .glyphicon-screenshot{
                color: red;
            }
        `
    ],
    directives: [TweetsComponent]

})
export class AppComponent {

}
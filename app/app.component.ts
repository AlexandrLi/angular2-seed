import {Component} from "angular2/core";
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {AutoGrowDirective} from "./auto-grow.directive";
import {VoterComponent} from "./voter.component";
import {ZippyComponent} from "./zippy.component";
import {SubscribeComponent} from "./subscribe-form.component";
import {SignupFormComponent} from "./signup-form.component";

@Component({
    selector: 'my-app',
    template: `
            <h1>Angular 2 App</h1><voter [voteCount]="post.voteCount" [myVote]="post.myVote" (vote)="onVote($event)"></voter>
            <subscribe-form></subscribe-form>
            <courses></courses>
            <authors></authors>
            <input type="text" autoGrow/>
            <zippy title="Zippy component title">
                <div>Zippy component body</div>
            </zippy>
            <signup-form></signup-form>
            `,
    directives: [VoterComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective, ZippyComponent, SubscribeComponent, SignupFormComponent]

})
export class AppComponent {
    post = {
        voteCount: 7,
        myVote: 1
    }

    onVote($event) {
        console.log($event);
    }
}
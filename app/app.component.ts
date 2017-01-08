import {Component} from "angular2/core";
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {AutoGrowDirective} from "./auto-grow.directive";
import {VoterComponent} from "./voter.component";
import {ZippyComponent} from "./zippy.component";
import {SubscribeComponent} from "./subscribe-form.component";
import {SignupFormComponent} from "./signup-form.component";
import {PassChangeFormComponent} from "./passchange-form.component";
import {ObservablesComponent} from "./observables.component";

@Component({
    selector: 'my-app',
    template: `
            <h1>Angular 2 App</h1><voter [voteCount]="post.voteCount" [myVote]="post.myVote" (vote)="onVote($event)"></voter>
            <subscribe-form></subscribe-form>
            <courses></courses>
            <authors></authors>
            <observables></observables>
            <zippy title="Zippy component title">
                <div>Zippy component body</div>
            </zippy>
            <signup-form></signup-form>
            <passchange-form></passchange-form>
            `,
    directives: [VoterComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective, ZippyComponent, SubscribeComponent, SignupFormComponent, PassChangeFormComponent, ObservablesComponent]

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
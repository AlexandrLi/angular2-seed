import {Component} from "angular2/core";
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {AutoGrowDirective} from "./auto-grow.directive";
import {VoterComponent} from "./voter.component";

@Component({
    selector: 'my-app',
    template: `
            <h1>Angular 2 App</h1><voter [voteCount]="post.voteCount" [myVote]="post.myVote" (vote)="onVote($event)"></voter>
            <courses></courses>
            <authors></authors>
            <input type="text" autoGrow/>
            `,
    directives: [VoterComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective]

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
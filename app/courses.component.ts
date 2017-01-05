import {Component} from "angular2/core";
import {CourseService} from "./course.service";
import {LikeComponent} from "./like.component";
import {FavoriteComponent} from "./favorite.component";

@Component({
    selector: 'courses',
    template: `
<h2>Courses<favorite [is-favorite]="false"></favorite></h2>
{{title}}
<ul>
<li *ngFor="#course of courses">
{{course}} <like [isLiked]="true" [totalLikes]="5"></like>
</li>
</ul>
`,
    providers: [CourseService],
    directives: [FavoriteComponent, LikeComponent]
})
export class CoursesComponent {
    courses: string[];
    title = "The title of courses page";

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

}


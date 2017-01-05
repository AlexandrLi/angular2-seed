import {Component} from "angular2/core";
import {AuthorService} from "./author.service";
import {LikeComponent} from "./like.component";
import {FavoriteComponent} from "./favorite.component";

@Component({
    selector: 'authors',
    template: `
<h2>Authors<favorite [is-favorite]="true" (change)="onFavoriteChange($event)"></favorite></h2>
{{title}}
<ul>
    <li *ngFor="#author of authors">
        {{author}} <like [isLiked]="false" [totalLikes]="2"></like>
    </li>
</ul>`,
    providers: [AuthorService],
    directives: [FavoriteComponent,LikeComponent]
})
export class AuthorsComponent {
    authors: string[];
    title = "Title for the authors page"

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }

    onFavoriteChange($event) {
        console.log($event);
    }
}

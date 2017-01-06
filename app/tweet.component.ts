import {Component, Input} from "angular2/core";
import {LikeComponent} from "./like.component";
import {FavoriteComponent} from "./favorite.component";
import {VoterComponent} from "./voter.component";

@Component({
    selector: 'tweet',
    template: `
            <div class="media">
              <div class="media-left">
                  <img class="media-object" src="{{data.imageUrl}}" alt="not found">             
              </div>
              <div class="media-body">
                <h4 class="media-heading"><b>{{data.title}}</b> <span style="color: #ccc"><b>{{data.author}}</b> <favorite [is-favorite]="data.isFavorite"></favorite></span></h4>
                {{data.message}}
                <p><like [isLiked]="data.isLiked" [totalLikes]="data.totalLikes"></like></p>
              </div>
            </div>
        `,
    styles: [
        `
            .media{
                margin: 30px;
            }
            .media-object{
                border-radius: 10px;
            }
        `
    ],
    directives: [LikeComponent, FavoriteComponent, VoterComponent],
})

export class TweetComponent {
    @Input() data: any[];

    constructor() {
        console.log(this.data);
    }
}
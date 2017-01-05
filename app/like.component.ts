import {Component, Input} from "angular2/core";

@Component({
    selector: 'like',
    template: `
            <i class="glyphicon glyphicon-heart" [class.highlighted]="isLiked" (click)="onClick()"><span>{{totalLikes}}</span></i>            
              `,
    styles: [`
            .glyphicon-heart{
                color: #ccc;
                cursor: pointer;
            }
            .highlighted{
                color: deeppink;
            }
            `]
})

export class LikeComponent {
    @Input() isLiked = false;
    @Input() totalLikes:number = 0;

    onClick() {
        this.isLiked = !this.isLiked;
        this.totalLikes += this.isLiked ? 1 : -1
    }
}
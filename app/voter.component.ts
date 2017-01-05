import {Component} from "angular2/core";
import {Input, Output} from "angular2/src/core/metadata";
import {EventEmitter} from "angular2/src/facade/async";

@Component({
    selector: 'voter',
    template: `
                <div class="voter">
                    <i class="glyphicon glyphicon-menu-up vote-button" [class.highlighted]="myVote==1" (click)="upVote()"></i>
                    <span>{{voteCount+myVote}}</span>
                    <i class="glyphicon glyphicon-menu-down vote-button" [class.highlighted]="myVote==-1" (click)="downVote()"></i>
                </div>                
            `,
    styles: [
        `
            .voter{          
            width: 20px;
            text-align: center;
            color:#ccc
            }
            .vote-button{
            cursor: pointer;
            }
            .highlighted{
            color: orange;
            }
        `
    ]
})

export class VoterComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();


    upVote() {
        if (this.myVote == 1) {
            return;
        }
        this.myVote++;
        this.vote.emit({myVote: this.myVote});
    }

    downVote() {
        if (this.myVote == -1) {
            return;
        }
        this.myVote--;
        this.vote.emit({myVote: this.myVote});
    }

}
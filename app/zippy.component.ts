import {Component} from "angular2/core";
import {Input} from "angular2/src/core/metadata";

@Component({
    selector: 'zippy',
    template: `
            <div class="panel panel-default">
              <div class="panel-heading" (click)="toggle()" (mouseenter)="isFocused=true" (mouseleave)="isFocused=false" [style.background-color]="isFocused?'lightblue':'white'">
                <h3 class="panel-title">{{title}}
                    <i class="pull-right glyphicon"
                    [ngClass]="{
                        'glyphicon-chevron-up': !isCollapsed,
                        'glyphicon-chevron-down': isCollapsed
                    }"></i>
                </h3>
              </div>
              <div [hidden]="isCollapsed" class="panel-body">
                <ng-content></ng-content>
              </div>
            </div>
        `,
    styles: [`
        .panel-heading{
            cursor: pointer;
        }
    `]

})

export class ZippyComponent {
    isCollapsed = true;
    isFocused = false;
    @Input() title = "Default title";

    toggle() {
        this.isCollapsed = !this.isCollapsed;
    }

}
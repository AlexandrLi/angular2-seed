import {Component} from "angular2/core";
import {Input} from "angular2/src/core/metadata";

@Component({
    selector: 'spinner',
    template: '<i *ngIf="visible" class="fa fa-spinner fa-spin fa-5x"></i>'
})
export class SpinnerComponent {
    @Input() visible = true;
}

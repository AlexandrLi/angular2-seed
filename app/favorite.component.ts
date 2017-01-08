import {Component, Input, Output} from "angular2/core";
import {EventEmitter} from "angular2/src/facade/async";

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
            .glyphicon-star{
                color: orange;
            }          
`]
})

export class FavoriteComponent {
    @Input('is-favorite') isFavorite = false;
    @Output() change = new EventEmitter();

    toggle() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite})
    }

}
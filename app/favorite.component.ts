import {Component, Input, Output} from "angular2/core";
import {EventEmitter} from "angular2/src/facade/async";

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styleUrls: ['app/favorite.styles.css']
})

export class FavoriteComponent {
    @Input('is-favorite') isFavorite = false;
    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite})
    }

}
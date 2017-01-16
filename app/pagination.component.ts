import {Component} from "angular2/core";
import {Input, Output} from "angular2/src/core/metadata";
import {EventEmitter} from "angular2/src/facade/async";
import {OnChanges} from "angular2/src/core/linker/interfaces";

@Component({
    selector: 'pagination',
    templateUrl: 'app/pagination.component.html'
})
export class PaginationComponent implements OnChanges {
    @Input() items = [];
    @Input('page-size') pageSize;
    @Output('page-changed') pageChanged = new EventEmitter();
    pages: any [];
    currentPage;

    ngOnChanges() {
        this.currentPage = 1;
        var pagesCount = Math.ceil(this.items.length / this.pageSize);
        this.pages = [];
        for (var i = 1; i <= pagesCount; i++) {
            this.pages.push(i);
        }
    }

    changePage(page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    }


    previous() {
        if (this.currentPage == 1) {
            return;
        }
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);

    }

    next() {
        if (this.currentPage == this.pages.length) {
            return;
        }
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }
}
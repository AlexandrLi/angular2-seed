import {Component, OnChanges, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'pagination',
    templateUrl: 'app/shared/pagination.component.html'
})

export class PaginationComponent implements OnChanges {
    @Input() items = [];
    @Input('page-size') pageSize;
    @Output('page-changed') pageChanged = new EventEmitter();
    pages: any [];
    currentPage;

    ngOnChanges() {
        this.currentPage = 1;
        let pagesCount = Math.ceil(this.items.length / this.pageSize);
        this.pages = [];
        for (let i = 1; i <= pagesCount; i++) {
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
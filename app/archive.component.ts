import {Component, OnInit} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {PhotoService} from "./photo.service";
import {RouteParams} from "angular2/src/router/instruction";

@Component({
    template: `
        <h1>Archives</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div>
            {{archive.year}}/{{archive.month}}
        </div>
    `,
    providers: [PhotoService, HTTP_PROVIDERS]
})
export class ArchiveComponent implements OnInit {
    isLoading = true;
    archive;

    constructor(private _photoService: PhotoService, private _routeParams: RouteParams) {
    }

    ngOnInit() {
        this.archive = this._photoService.getArchive(this._routeParams.get("year"), this._routeParams.get("month"));
        this.isLoading = false;
    }
}
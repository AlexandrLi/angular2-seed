import {Component, OnInit} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {PhotoService} from "./photo.service";
import {RouteParams} from "angular2/src/router/instruction";

@Component({
    template: `
        <h1>Album</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-refresh fa-spin fa-3x"></i>
        </div>
        <div>
            <img *ngFor="#photo of photos" src="{{ photo.thumbnailUrl }}">
        </div>
    `,
    providers: [PhotoService, HTTP_PROVIDERS]
})
export class AlbumComponent implements OnInit {
    isLoading = true;
    photos;

    constructor(private _photoService: PhotoService, private _routeParams: RouteParams) {
    }

    ngOnInit() {
        this._photoService.getPhotos(this._routeParams.get("id"))
            .subscribe(photos => {
                this.isLoading = false;
                this.photos = photos;
            });
    }
}
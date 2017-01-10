import {Component, OnInit} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {PhotoService} from "./photo.service";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    template: `      
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <ul>
            <li *ngFor="#archive of archives">
                <a [routerLink]="['Archive',{year:archive.year,month:archive.month}]">
                {{archive.year}}/{{archive.month}}
                </a>
            </li> 
        </ul>
        `,
    providers: [PhotoService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]

})
export class ArchivesComponent implements OnInit {
    isLoading = true;
    archives;

    constructor(private _photoService: PhotoService) {
    }

    ngOnInit() {
        this.archives = this._photoService.getArchives();
        this.isLoading = false;
    }

}
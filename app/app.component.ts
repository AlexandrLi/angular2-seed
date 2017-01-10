import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {AlbumsComponent} from "./albums.component";
import {ContactComponent} from "./contact.component";
import {AlbumComponent} from "./album.component";
import {ArchivesComponent} from "./archives.component";
import {ArchiveComponent} from "./archive.component";

@RouteConfig([
    {path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    {path: '/album/:id', name: 'Album', component: AlbumComponent},
    {path: '/archives', name: 'Archives', component: ArchivesComponent},
    {path: '/archive/:year/:month', name: 'Archive', component: ArchiveComponent},
    {path: '/archive/*other', name: 'OtherArchive', redirectTo:['Archives']},
    {path: '/contact', name: 'Contact', component: ContactComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Albums']}
])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
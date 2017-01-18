import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {PostsModule} from "./posts/posts.module";
import {UsersModule} from "./users/users.module";
import {SharedModule} from "./shared/shared.module";
import {RoutingModule} from "./app.routing";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";
import {UsersRoutingModule} from "./users/users.routing";
import {PostsRoutingModule} from "./posts/posts.routing";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UsersRoutingModule,
        PostsRoutingModule,
        RoutingModule,
        UsersModule,
        PostsModule,
        SharedModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
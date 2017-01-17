import {NgModule} from "@angular/core";
import {PostsComponent} from "./posts.component";
import {PostService} from "./post.service";
import {UserService} from "../users/user.service";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [PostsComponent],
    declarations: [
        PostsComponent,
    ],
    providers: [
        PostService,
        UserService
    ],
})
export class PostsModule {
}

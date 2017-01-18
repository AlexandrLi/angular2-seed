import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PostsComponent} from "./posts.component";


const routes: Routes = [
    {path: 'posts', component: PostsComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class PostsRoutingModule {
}

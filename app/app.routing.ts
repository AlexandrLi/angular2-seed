import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";
import {PostsComponent} from "./posts/posts.component";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'posts', component: PostsComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class RoutingModule {
}

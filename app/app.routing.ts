import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {UsersComponent} from "./users/users.component";
import {UserFormComponent} from "./users/user-form.component";
import {NotFoundComponent} from "./not-found.component";
import {PostsComponent} from "./posts/posts.component";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/new', component: UserFormComponent},
    {path: 'users/:id', component: UserFormComponent},
    {path: 'posts', component: PostsComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class RoutingModule {
}

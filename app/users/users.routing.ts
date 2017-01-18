import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./users.component";
import {UserFormComponent} from "./user-form.component";
import {PreventUnsavedChangesGuard} from "../shared/prevent-unsaved-changes-guard.service";

const routes: Routes = [
    {path: 'users', component: UsersComponent},
    {path: 'users/new', component: UserFormComponent, canDeactivate: [PreventUnsavedChangesGuard]},
    {path: 'users/:id', component: UserFormComponent, canDeactivate: [PreventUnsavedChangesGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class UsersRoutingModule {
}

import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {UserService} from "./user.service";
import {ReactiveFormsModule} from "@angular/forms";
import {UserFormComponent} from "./user-form.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        UsersComponent,
        UserFormComponent
    ],
    declarations: [
        UsersComponent,
        UserFormComponent
    ],
    providers: [
        UserService
    ],
})
export class UsersModule {
}

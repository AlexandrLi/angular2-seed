import {NgModule} from "@angular/core";
import {SpinnerComponent} from "./spinner.component";
import {PaginationComponent} from "./pagination.component";
import {NavbarComponent} from "./navbar.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PreventUnsavedChangesGuard} from "./prevent-unsaved-changes-guard.service";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        SpinnerComponent,
        PaginationComponent,
        NavbarComponent,
    ],
    declarations: [
        SpinnerComponent,
        PaginationComponent,
        NavbarComponent,
    ],
    providers: [PreventUnsavedChangesGuard],
})
export class SharedModule {
}

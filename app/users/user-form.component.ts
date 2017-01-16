import {Component, OnInit} from "angular2/core";
import {FormBuilder} from "angular2/src/common/forms/form_builder";
import {Validators} from "angular2/src/common/forms/validators";
import {BasicValidators} from "../shared/basicValidators";
import {CanDeactivate, Router} from "angular2/router";
import {ControlGroup} from "angular2/src/common/forms/model";
import {UserService} from "./user.service";
import {RouteParams} from "angular2/src/router/instruction";
import {User} from "./user";

@Component({
    selector: 'user-form',
    templateUrl: 'user-form.component.html',
    providers: [FormBuilder, UserService]
})
export class UserFormComponent implements OnInit, CanDeactivate {
    form: ControlGroup;
    title: string;
    user = new User();
    isSaving = false;

    constructor(fb: FormBuilder,
                private _userService: UserService,
                private _router: Router,
                private _routeParams: RouteParams) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, BasicValidators.email])],
            phone: [''],
            address: fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipcode: ['']
            })
        });
    }

    ngOnInit() {
        var id = this._routeParams.get('id');
        this.title = id ? "Edit User" : "Add User";
        if (!id) {
            return;
        }
        this._userService.getUser(id)
            .subscribe(user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
    }

    routerCanDeactivate(next, previous) {
        if (this.form.dirty && !this.isSaving) {
            return confirm("You lost all filled data, are you sure?")
        }
        return true;
    }

    saveUser() {
        var result;
        if (this.user.id)
            result = this._userService.updateUser(this.user);
        else
            result = this._userService.postUser(this.user);

        result.subscribe(result => {
            this.isSaving = true;
            this._router.navigate(['Users']);
        });
    }
}
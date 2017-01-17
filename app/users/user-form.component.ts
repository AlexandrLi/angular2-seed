import {Component, OnInit} from "@angular/core";
import {BasicValidators} from "../shared/basicValidators";
import {UserService} from "./user.service";
import {User} from "./user";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'user-form',
    templateUrl: 'app/users/user-form.component.html',
})
export class UserFormComponent implements OnInit {
    form: FormGroup;
    title: string;
    user = new User();
    isSaving = false;

    constructor(fb: FormBuilder,
                private _userService: UserService,
                private _router: Router,
                private _route: ActivatedRoute) {
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
        let id;
        this._route.params
            .subscribe(params => id = params['id'])
            .unsubscribe();
        this.title = id ? "Edit User" : "Add User";
        if (!id) {
            return;
        }
        this._userService.getUser(id)
            .subscribe(user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['**']);
                    }
                });
    }

    // hasUnsavedChanges() {
    //     if (this.form.dirty && !this.isSaving) {
    //         return confirm("You lost all filled data, are you sure?")
    //     }
    //     return true;
    // }

    saveUser() {
        let result;
        if (this.user.id)
            result = this._userService.updateUser(this.user);
        else
            result = this._userService.postUser(this.user);

        result.subscribe(result => {
            this.isSaving = true;
            this._router.navigate(['users']);
        });
    }
}
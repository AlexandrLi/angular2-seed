import {Component, OnInit} from "angular2/core";
import {FormBuilder} from "angular2/src/common/forms/form_builder";
import {Validators} from "angular2/src/common/forms/validators";
import {BasicValidators} from "./basicValidators";

@Component({
    selector: 'user-form',
    templateUrl: 'app/user-form.component.html',
    providers: [FormBuilder]
})
export class UserFormComponent implements OnInit {
    form;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, BasicValidators.email])],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    ngOnInit() {
    }

}
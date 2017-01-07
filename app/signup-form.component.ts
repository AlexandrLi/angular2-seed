import {Component} from "angular2/core";
import {ControlGroup, Validators, FormBuilder} from "angular2/common";
import {UsernameValidators} from "./usernameValidators";

@Component({
    selector: 'signup-form',
    templateUrl: "app/signup-form.template.html"

})
export class SignupFormComponent {
    form: ControlGroup

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([Validators.required, UsernameValidators.cannotContainSpace])],
            password: ['', Validators.required]
        });
    }

    signup() {
        console.log(this.form.value);
    }
}

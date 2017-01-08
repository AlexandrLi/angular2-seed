import {Component} from "angular2/core";
import {ControlGroup, Validators, FormBuilder} from "angular2/common";
import {PasswordValidators} from "./passwordValidators";

@Component({
    selector: 'passchange-form',
    templateUrl: "app/passchange-form.template.html"

})
export class PassChangeFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            curPass: ['', Validators.compose([Validators.required,])],
            newPass: ['', Validators.compose([Validators.required, Validators.minLength])],
            confirmPass: ['', Validators.required]
        }, {validator: PasswordValidators.shouldMatches});
    }

    changePassword() {
        if (this.form.find('curPass').value != '1234') {
            this.form.find('curPass').setErrors({invalidCurrentPass: true});
        }
        if (this.form.valid) {
            alert('Password successfully changed.');
        }
    }
}

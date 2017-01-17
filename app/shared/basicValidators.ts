import {FormGroup} from "@angular/forms";

export class BasicValidators {

    static email(control: FormGroup) {
        const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = emailRegexp.test(control.value);
        return valid ? null : {email: true};
    }
}
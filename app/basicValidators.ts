import {Control} from "angular2/src/common/forms/model";
export class BasicValidators {


    static email(control: Control) {
        const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = emailRegexp.test(control.value);
        return valid ? null : {email: true};
    }
}
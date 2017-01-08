import {ControlGroup} from "angular2/common";

export class PasswordValidators {

    static shouldMatches(group: ControlGroup) {
        var newPassword = group.find('newPass').value;
        var confirmPassword = group.find('confirmPass').value;
        if (newPassword == '' || confirmPassword == '') {
            return null;
        }
        if (newPassword != confirmPassword) {
            return {notMatches: true};
        }
        return null;
    }
}
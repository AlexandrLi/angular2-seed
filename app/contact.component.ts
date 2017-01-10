import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {ControlGroup, FormBuilder} from "angular2/common";
import {Validators} from "angular2/src/common/forms/validators";
import {CanDeactivate} from "angular2/src/router/interfaces";


@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    private _isSubmitted = false;
    form: ControlGroup;

    constructor(fb: FormBuilder, private _router: Router) {
        this.form = fb.group({
            name: ['', Validators.required],
            comment: ['', Validators.required]
        });
    }

    onSubmit() {
        console.log(this.form);
        this._isSubmitted = true;
        this._router.navigate(['Albums']);
    }

    routerCanDeactivate(next, previous) {
        if (!this._isSubmitted && this.form.dirty)
            return confirm("Are you sure?");

        return true;
    }
}

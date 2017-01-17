import {Component} from "@angular/core";
import {UserService} from "./user.service";

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html',
})
export class UsersComponent {
    isLoading = true;
    users = [];

    constructor(private _userService: UserService) {
        this._userService
            .getUsers()
            .subscribe(users => {
                this.isLoading = false;
                this.users = users
            });
    }

    deleteUser(user) {
        if (confirm("Are you sure, you want to delete " + user.name + "?")) {
            let index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this._userService.deleteUser(user.id)
                .subscribe(null,
                    err => {
                        alert("Could not delete the user.");
                        this.users.splice(index, 0, user);
                    })
        }

    }
}
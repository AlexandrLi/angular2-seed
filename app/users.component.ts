import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {UserService} from "./user.service";

@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class UsersComponent implements OnInit {
    users;

    constructor(private _userService: UserService) {
        this._userService
            .getUsers()
            .subscribe(users => this.users = users);
    }

    ngOnInit() {
    }

    deleteUser(user) {
        if (confirm("Are you sure, you want to delete " + user.name + "?")) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this._userService.deleteUser(user.id)
                .subscribe(null,
                    err => {
                        alert("Could not delete the user.")
                        this.users.splice(index, 0, user);
                    })
        }

    }
}
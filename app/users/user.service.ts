import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
    private _url = 'https://jsonplaceholder.typicode.com/users/';

    constructor(private _http: Http) {
    }

    postUser(user) {
        return this._http.post(this._url, JSON.stringify(user))
            .map(user => user.json());
    }

    getUser(userId) {
        return this._http.get(this.getUserUrl(userId))
            .map(user => user.json());
    }

    updateUser(user) {
        return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(user => user.json());
    }

    getUsers() {
        return this._http.get(this._url)
            .map(users => users.json());
    }

    deleteUser(userId) {
        return this._http.delete(this.getUserUrl(userId))
            .map(user => user.json());
    }

    getUserUrl(userId) {
        return this._url + userId;
    }
}
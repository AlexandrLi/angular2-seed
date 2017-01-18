import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {User} from "./user";

@Injectable()
export class GithubService {
    private _userUrl = "https://api.github.com/users/";

    constructor(private _http: Http) {
    }


    getUser(username: string): Observable<User> {
        return this._http.get(this._userUrl + username)
            .map(res => res.json());
    }

    getUserFollowers(username: string): Observable<User[]> {
        return this._http.get(this._userUrl + username + "/followers")
            .map(res => res.json());
    }
}
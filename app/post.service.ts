import {Http} from "angular2/src/http/http";
import {Injectable} from "angular2/src/core/di/decorators";
import "rxjs/add/operator/map";

@Injectable()
export class PostService {
    private _url = 'https://jsonplaceholder.typicode.com/posts/';

    constructor(private _http: Http) {
    }

    getPosts(filter?) {
        var url = this._url;
        if (filter && filter.userId) {
            url += "?userId=" + filter.userId;
        }
        return this._http.get(this._url)
            .map(posts => posts.json());
    }


    getPostComments(postId) {
        return this._http.get(this.getPostUrl(postId) + "/comments")
            .map(comments => comments.json());
    }

    getPostUrl(postId) {
        return this._url + postId;
    }
}

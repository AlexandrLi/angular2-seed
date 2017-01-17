import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class PostService {
    private _url = 'https://jsonplaceholder.typicode.com/posts/';

    constructor(private _http: Http) {
    }

    getPosts(filter?) {
        let url = this._url;
        if (filter && filter.userId) {
            url += "?userId=" + filter.userId;
        }
        return this._http.get(url)
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

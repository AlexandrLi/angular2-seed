import {Component, OnInit} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import "rxjs/add/operator/delay";
import {GithubService} from "./github.service";
import {User} from "./user";

@Component({
    selector: 'my-app',
    template: `
            <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-5x"></i>
            <div *ngIf="!isLoading" style="margin: 30px">
                <h2>@{{user.login}}</h2>
                <a href="{{user.html_url}}">
                    <img class="media-object avatar" src="{{user.avatar_url}}" alt="not found">
                </a>
                <h3><b>Followers</b></h3>
                <div *ngFor="#follower of followers" class="media">
                  <div class="media-left">
                    <a href="{{follower.html_url}}">
                      <img class="media-object avatar" src="{{follower.avatar_url}}" alt="not found">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading"><b>@{{follower.login}}</b></h4>
                  </div>
                </div>
            </div>
            `,
    styles: [`        
        .avatar{
			width:	100px;
			height:	100px;
			border-radius:	100%;
        }
        `],
    providers: [GithubService, HTTP_PROVIDERS]

})
export class AppComponent implements OnInit {
    isLoading = true;
    username = "octocat";
    user: User;
    followers: User[];

    constructor(private _githubService: GithubService) {
    }

    ngOnInit() {
        var user = this._githubService.getUser(this.username);
        var followers = this._githubService.getUserFollowers(this.username);
        console.log(this.username);
        Observable.forkJoin(user, followers)
            .delay(1000)
            .subscribe(
                resp => {
                    this.user = resp[0];
                    this.followers = resp[1];
                },
                null,
                () => {
                    this.isLoading = false;
                })
    }
}
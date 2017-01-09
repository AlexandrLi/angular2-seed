import {Component, OnInit} from "angular2/core";
import {GithubService} from "./github.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {User} from "./user";
import {Observable} from "rxjs/Rx";
import "rxjs/add/observable/forkJoin";

@Component({
    selector: 'my-app',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-5x"></i>
        </div>
        <div *ngIf="!isLoading" style="margin: 30px">
            <div class="media">
              <div class="media-left">
                <a href="{{user.html_url}}">
                  <img class="media-object avatar" src="{{user.avatar_url}}" alt="not found">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading"><b>@{{user.login}}</b></h4>
              </div>
            </div>
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
    user: User;
    followers: User[];

    constructor(private _githubService: GithubService) {
    }

    ngOnInit() {

        var user = this._githubService.getUser("yalexeyenko");
        var followers = this._githubService.getUserFollowers("yalexeyenko");


        Observable.forkJoin(user, followers)
            .map(joined => {
                this.user = joined[0];
                this.followers = joined[1];
            })
            .delay(1000)
            .subscribe(() => {
                this.isLoading = false;
            });

    }
}
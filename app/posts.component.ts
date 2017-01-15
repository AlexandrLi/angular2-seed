import {Component} from "angular2/core";
import {PostService} from "./post.service";
import {SpinnerComponent} from "./spinner.component";
import {UserService} from "./user.service";

@Component({
    selector: 'posts',
    templateUrl: "app/posts.component.html",
    providers: [PostService, UserService],
    directives: [SpinnerComponent]
})
export class PostsComponent {
    isLoading = true;
    posts = [];
    comments = [];
    users = [];
    currentPost;

    constructor(private _postService: PostService,
                private _userService: UserService) {
        this.loadPosts();
        this.loadUsers();
    }

    select(post) {
        this.comments = null;
        this.currentPost = post;
        this.isLoading = true;
        this._postService.getPostComments(this.currentPost.id)
            .subscribe(comments => {
                this.isLoading = false;
                this.comments = comments;
            })
    }

    private loadUsers() {
        this._userService.getUsers()
            .subscribe(users => this.users = users);
    }

    private loadPosts(filter?) {
        this._postService.getPosts(filter)
            .subscribe(posts => {
                this.isLoading = false;
                this.posts = posts;
            });
    }

    reloadPosts(filter) {
        this.isLoading = true;
        this.posts = null;
        this.currentPost = null;
        this.loadPosts(filter);
    }

}
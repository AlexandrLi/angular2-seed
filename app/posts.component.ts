import {Component} from "angular2/core";
import {PostService} from "./post.service";
import {SpinnerComponent} from "./spinner.component";
import {UserService} from "./user.service";
import {PaginationComponent} from "./pagination.component";

@Component({
    selector: 'posts',
    templateUrl: "app/posts.component.html",
    providers: [PostService, UserService],
    directives: [SpinnerComponent, PaginationComponent]
})
export class PostsComponent {
    isLoading = true;
    posts = [];
    pagedPosts = [];
    comments = [];
    users = [];
    currentPost;
    pageSize = 15;

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
                this.pagedPosts = this.getPostsInPage(1);
            });
    }

    onPageChanged(page) {
        this.currentPost = null;
        this.pagedPosts = this.getPostsInPage(page);
    }

    reloadPosts(filter) {
        this.isLoading = true;
        this.currentPost = null;
        this.loadPosts(filter);
    }

    private getPostsInPage(page) {
        var result = [];
        var startIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startIndex + this.pageSize, this.posts.length);
        for (var i = startIndex; i < endIndex; i++) {
            result.push(this.posts[i]);
        }
        return result;
    }
}
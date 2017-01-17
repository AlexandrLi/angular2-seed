import {Component} from "@angular/core";
import {PostService} from "./post.service";
import {UserService} from "../users/user.service";

@Component({
    selector: 'posts',
    templateUrl: "app/posts/posts.component.html",
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
                this.pagedPosts = _.take(this.posts, this.pageSize);
            });
    }

    onPageChanged(page) {
        this.currentPost = null;
        let startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    }

    reloadPosts(filter) {
        this.isLoading = true;
        this.currentPost = null;
        this.loadPosts(filter);
    }

}
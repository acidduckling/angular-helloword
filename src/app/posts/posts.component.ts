import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInput } from "../common/bad-input";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      response => {
        this.posts = response.json();
      },
      (error: Response) => {
        alert("an unexpected error occurred.");
        console.log(error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = "";

    this.service.createPost(post).subscribe(
      response => {
        post["id"] = response.json().id;
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else {
          alert("an unexpected error occurred.");
          console.log(error);
        }
      }
    );
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(
      response => {
        console.log(response.json());
      },
      (error: Response) => {
        alert("an unexpected error occurred.");
        console.log(error);
      }
    );
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) alert("This post has already been deleted.");
        else alert("an unexpected error occurred.");
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { GithubFollowersService } from "../services/github-followers.service";
import { Follower } from "./Follower";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"]
})
export class GithubFollowersComponent implements OnInit {
  followers: Follower[];

  constructor(
    private service: GithubFollowersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

    });

    this.route.queryParamMap.subscribe(params => {
      
    });

    // Using snapshot...
    //let id = this.route.snapshot.paramMap.get('id');

    // let page = this.route.snapshot.queryParamMap.get('page')
    // let order = this.route.snapshot.queryParamMap.get('order')

    this.service.getAll().subscribe(followers => (this.followers = followers));
  }
}

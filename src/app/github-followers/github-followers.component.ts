import { Component, OnInit } from "@angular/core";
import { GithubFollowersService } from "../services/github-followers.service";
import { Follower } from "./Follower";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

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
    // Combine two Observables... and use switchMap to get Observable<any>
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      return this.service.getAll();
    })
    .subscribe(followers => (this.followers = followers));

    // Using snapshot...
    //let id = this.route.snapshot.paramMap.get('id');

    // let page = this.route.snapshot.queryParamMap.get('page')
    // let order = this.route.snapshot.queryParamMap.get('order')
  }
}

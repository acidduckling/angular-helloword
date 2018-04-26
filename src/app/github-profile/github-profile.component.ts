import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    // If route for page (user id for example) can be updated, then we should subscribe to observable, 
    // otherwise we cam use a snapshot.

    // Using snapshot
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    // using subscription to Observable
    this.route.paramMap.subscribe((params) => {
      let id = +params.get('id');
      console.log(id);
    });
  }

}

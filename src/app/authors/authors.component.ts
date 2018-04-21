import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: string[];
  
  constructor(private service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}

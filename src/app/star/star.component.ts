import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  isFavourite = false;
  constructor() { }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  @Input('isFavourite') isFavourite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit();
  }
}

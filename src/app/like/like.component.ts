import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;
  @Output('like') like = new EventEmitter();

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += this.isActive ? 1 : -1;
    this.like.emit();
  }
}

import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  }

  post = {
    title: 'Title',
    isFavourite: true
  }

  onFavouriteChange(eventArgs: FavouriteChangedEventArgs) {
    console.log('favourite changed', eventArgs);
  }
}

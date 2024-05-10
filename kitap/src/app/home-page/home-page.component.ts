import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BookData } from '../models/book-data.const';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { BookModel } from '../models/book-model.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatBadgeModule,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  bookData = BookData;
  basketList:BookModel[] = []
  test : BookModel={}

  addBasket(book: BookModel) {
    const index = this.basketList.findIndex(data => data.name === book.name)    
    if(index <0) this.basketList.push(book)


  }

}

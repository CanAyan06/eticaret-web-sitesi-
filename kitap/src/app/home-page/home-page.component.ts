import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BookData } from '../models/book-data.const';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { BookModel } from '../models/book-model.interface';
import { RouterLink } from '@angular/router';
import { categories } from '../models/catagories.const';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatBadgeModule,RouterLink,StarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  bookData = BookData;
  filteredData:BookModel[] = [];
  basketList:BookModel[] = []
  test : BookModel={}
  categoriesButton:string[]=[]
  ngOnInit() {
    this.filteredData = this.bookData;
    Object.keys(categories).forEach(key => {
      this.categoriesButton.push(key);
    });
    console.log(this.categoriesButton);
  }
  filtercategory(category:string){
    if(category === "All" ){
      this.filteredData = this.bookData;
     
    }
    else{
      this.filteredData = this.bookData.filter(data => data.category === category);
      
    }
    
  }

  addBasket(book: BookModel) {
    const index = this.basketList.findIndex(data => data.name === book.name)    
    if(index <0) this.basketList.push(book)


  }
  

}

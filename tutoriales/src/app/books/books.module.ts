import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksOverviewComponent } from './books-overview/books-overview.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [BookDetailsComponent, BooksOverviewComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BookDetailsComponent,
    BooksOverviewComponent
  ],
  providers: [
    BookService
  ]
})
export class BooksModule { }

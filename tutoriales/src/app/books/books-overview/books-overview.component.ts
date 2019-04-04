import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { assign } from 'lodash';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
  constructor(public service: BookService) { }

  ngOnInit() {
    this.service.findAll().subscribe((data) => {
      this.books = data;
    })
  }

  isBookSelected(book: Book){
    return this.selectedBook === book;
  }

  selectBook(book: Book): void{
    if (this.selectedBook) {
      if (this.selectedBook.id === book.id) {
        this.selectedBook = undefined;
      } else {
        this.selectedBook = book;
      }
    } else {
      this.selectedBook = book;
    }
  }

  onBookUpdate(event: Book){
    let booksToUpdate = this.books.filter(function(currentBook: Book) {
      return currentBook.id === event.id;
    });

    if (booksToUpdate && booksToUpdate.length > 0){
      const bookToUpdate = booksToUpdate[0];
      assign(bookToUpdate, event);
    }
  }

}

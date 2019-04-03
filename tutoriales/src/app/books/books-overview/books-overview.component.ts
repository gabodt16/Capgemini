import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { assing } from 'lodash';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
  constructor() { }

  ngOnInit() {
    this.books = [
      Book.from('Grisselle', 'La constancia'),
      Book.from('Gioia', 'La actitud')
    ]
  }

  isBookSelected(book: Book){
    return this.selectedBook === book;
  }

  selectBook(book: Book){
    this.selectedBook = book;
  }

  onBookUpdate(event: Book){
    let booksToUpdate = this.books.filter(function(currentBook: Book) {
      return currentBook.id === event.id;
    });

    if (booksToUpdate && booksToUpdate.length > 0){
      const bookToUpdate = booksToUpdate[0];
      assing(bookToUpdate, event)
    }
  }

}

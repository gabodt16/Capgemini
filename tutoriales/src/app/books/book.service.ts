import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, Observer } from 'rxjs';
import { cloneDeep, assign } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[];
  constructor() { 
    this.books = [
      Book.from('Grisselle', 'La constancia'),
      Book.from('Gioia', 'La actitud')
    ];
  }

  findAll(): Observable<Book[]> {
    return Observable.create((observer: Observer<Book[]>) => {
      observer.next(this.books);
      observer.complete();
    });

  }

  findOne(id: number): Observable<Book> {
    let bookCopy: Book;
    const originalBook = this.books.find(book => book.id === id);
    if (originalBook) {
      bookCopy = cloneDeep(originalBook);
    }
    return Observable.create((observer: Observer<Book>) => {
      if (bookCopy) {
        observer.next(bookCopy);
        observer.complete();
      } else {
        observer.error(`El libro con el id: ${id} no existe!`);
      }
    }); 
  }

  saveBook(bookToSave: Book): Observable<Book>{
    let savedBook: Book;
    if (bookToSave.id) {
      savedBook = this.books.find(book => book.id === bookToSave.id);
      if (savedBook) {
        assign(savedBook, bookToSave);
      }
    }else {
      savedBook = Book.from(bookToSave.autores, bookToSave.titulo);
      this.books.push(savedBook);
    }

    return this.findOne(savedBook.id);
  }
}

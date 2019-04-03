import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
   _book: Book;
  @Output() bookUpdate: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() {
    //this.book = new Book();
  }

  get book(): Book{
    return this._book; 
  }

  @Input()
  set book(book: Book){
    this._book = cloneDeep(book);
  }

  
  save(){
    this.bookUpdate.emit(this._book);
  }

  ngOnInit() {
    
  }

}

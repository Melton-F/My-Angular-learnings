import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../interface/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent{
  @Input() book:Book = {} as Book //to receive data from parent to child
  @Output() bookEmitter = new EventEmitter<Book>() //to send data from child to parent

  addToCart(){
    // console.log(this.book)
    this.bookEmitter.emit(this.book)
  }
}

import { Component } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent {
  readonly book: Partial<Book> = {
    title: 'Moby Dick',
  };

  constructor() {}
}

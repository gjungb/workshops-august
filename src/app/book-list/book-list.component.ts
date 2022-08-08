import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private readonly service: BookApiService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.service.getAll().subscribe({
      // effect
      next: (res) => (this.books = res),
      // effect
      complete: () => console.log('Habe fertig'),
    });
  }
}

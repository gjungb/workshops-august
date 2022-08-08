import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  /**
   *
   */
  books$ = this.service.books$;

  /**
   *
   * @param service
   */
  constructor(private readonly service: BookApiService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.service.getAll().subscribe();
  }
}

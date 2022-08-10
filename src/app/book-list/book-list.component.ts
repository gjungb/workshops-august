import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  // books: Book[] = [];

  books$!: Observable<Book[]>;

  private sub?: Subscription;

  /**
   *
   * @param service
   * @param cart
   */
  constructor(
    private readonly service: BookApiService,
    private readonly cart: CartService
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.sub = timer(2000, 1000).subscribe({
      next: (value) => console.log(value),
    });

    this.books$ = this.service.getAll();

    // this.service.getAll().subscribe({
    //   // effect
    //   next: (res) => (this.books = res),
    //   // effect
    //   complete: () => console.log('Habe fertig'),
    // });
  }

  /**
   *
   * @param book
   */
  selectBook(book: Book): void {
    // effect
    this.cart.addBookToCart(book);
  }

  /**
   *
   */
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}

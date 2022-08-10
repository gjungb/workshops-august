import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../model/book';
import { CartModule } from './cart.module';

/**
 *
 */
@Injectable({
  providedIn: CartModule,
})
export class CartService {
  /**
   * The Subject containing the internal state
   */
  private readonly cart$$ = new BehaviorSubject<ReadonlyArray<Book>>([]);

  /**
   * The publicly available Observable of books in the cart that can be subscribed to by - multiple - Observers
   */
  readonly cart$ = this.cart$$.asObservable();

  /**
   * The publicly available Observable of the sum of pages that can be subscribed to by - multiple - Observers
   */
  readonly pages$ = this.cart$.pipe(
    map((books) =>
      books.reduce<number>((sum, book) => sum + (book.numPages ?? 0), 0)
    )
  );

  /**
   *
   * @param book
   */
  addBookToCart(book: Book): void {
    const list = [...this.cart$$.getValue(), { ...book }];
    // effect
    this.cart$$.next(list);
  }
}

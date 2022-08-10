import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../model/book';

/**
 *
 */
@Injectable({
  providedIn: 'root',
})
export class CartService {
  /**
   * The Subject containing the internal state
   */
  private readonly cart$$ = new BehaviorSubject<ReadonlyArray<Book>>([]);

  /**
   * The publicly available Observable that can be subscribed to by - multiple - Observers
   */
  readonly cart$ = this.cart$$.asObservable();

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

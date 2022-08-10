import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { CartService } from '../cart.service';

/**
 *
 */
@Component({
  selector: 'app-cart-symbol',
  templateUrl: './cart-symbol.component.html',
  styleUrls: ['./cart-symbol.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSymbolComponent implements OnInit {
  /**
   *
   */
  cart$?: Observable<ReadonlyArray<Book>>;

  /**
   *
   * @param cart
   */
  constructor(private readonly cart: CartService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.cart$ = this.cart.cart$;
  }
}

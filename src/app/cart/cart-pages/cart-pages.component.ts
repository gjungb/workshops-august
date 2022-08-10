import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

/**
 *
 */
@Component({
  selector: 'app-cart-pages',
  templateUrl: './cart-pages.component.html',
  styleUrls: ['./cart-pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPagesComponent implements OnInit {
  /**
   *
   */
  pages$!: Observable<number>;

  /**
   *
   * @param cart
   */
  constructor(private readonly cart: CartService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.pages$ = this.cart.pages$;
  }
}

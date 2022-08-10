import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSymbolComponent } from './cart-symbol/cart-symbol.component';
import { CartPagesComponent } from './cart-pages/cart-pages.component';

/**
 *
 */
@NgModule({
  declarations: [CartSymbolComponent, CartPagesComponent],
  imports: [CommonModule],
  exports: [CartSymbolComponent, CartPagesComponent],
})
export class CartModule {}

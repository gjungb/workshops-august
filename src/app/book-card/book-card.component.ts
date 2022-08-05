import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

/**
 * Representational Component
 * - UI
 * - Event-Handling
 */
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  /**
   * @todo Add docs
   */
  @Input()
  content?: Book;

  /**
   *
   */
  @Input()
  selected = false;

  /**
   *
   */
  @Output()
  selectBook = new EventEmitter<Book>();

  /**
   *
   */
  customStyle = {
    backgroundColor: 'goldenrod',
    color: '#ffccbb',
  };

  /**
   *
   * @param ev
   */
  handleDetailsClick(ev: MouseEvent): void {
    console.log('clicked', ev.clientX);
    // effect
    this.selectBook.emit(this.content);
  }
}

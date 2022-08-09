import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(2)],
      }),
    });
  }

  /**
   *
   * @param value
   */
  createBook(value: Pick<Book, 'title'>): void {
    // effect
    console.log(value);
  }
}

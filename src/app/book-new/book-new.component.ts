import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
   * @param fb
   */
  constructor(private readonly fb: FormBuilder) {}

  /**
   *
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control(null, {
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

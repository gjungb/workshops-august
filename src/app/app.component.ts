import { Component } from '@angular/core';
import { Book } from './model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Willkomen bei workshops-august';

  visible = true;

  book: Book = {
    title: 'Moby Dick',
    author: 'Herman Melville',
    abstract: 'A book about an old grumpy man',
  };

  log(value: unknown): void {
    console.log(value);
  }
}

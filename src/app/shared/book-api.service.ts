import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private id = Math.random();

  private books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      isbn: '',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
      isbn: '',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
      isbn: '',
    },
  ];

  constructor(
    private readonly client: HttpClient,
    @Inject('BASE_URL') private readonly baseUrl: string
  ) {}

  /**
   *
   * @returns
   */
  getAll(): Observable<Book[]> {
    const url = `${this.baseUrl}/books`;
    return this.client.get<Book[]>(url).pipe(
      catchError(() => of(this.books)),
      delay(2000)
    );
  }

  /** */
  getBookByIsbn(isbn: string | null): Observable<Book> {
    const url = `${this.baseUrl}/books/${isbn}`;
    return this.client.get<Book>(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];

  private BASE_URL = 'http://localhost:4730';

  constructor(private readonly client: HttpClient) {}

  /**
   *
   * @returns
   */
  getAll(): Observable<Book[]> {
    const url = `${this.BASE_URL}/books`;
    return this.client.get<Book[]>(url).pipe(
      catchError(() => of(this.books)),
      delay(2000)
    );
  }
}

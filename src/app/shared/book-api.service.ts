import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  /**
   * The RxJS Subject that holds the current books in memory
   */
  private readonly books$$ = new BehaviorSubject<Book[]>([]);

  /**
   * The RxJS Observable that can be subscribed to by many Observers
   */
  readonly books$ = this.books$$.asObservable();

  /**
   *
   */
  private id = Math.random();

  /**
   * A fallback list of books
   */
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

  /**
   * @todo move to Dependency Injection
   */
  private BASE_URL = 'http://localhost:4730';

  /**
   *
   * @param client
   */
  constructor(private readonly client: HttpClient) {}

  /**
   *
   * @returns
   */
  getAll(): Observable<Book[]> {
    const url = `${this.BASE_URL}/books`;
    return this.client
      .get<Book[]>(url)
      .pipe(tap((res) => this.books$$.next(res)));
  }
}

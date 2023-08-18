import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IBook } from '../model/ibook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  private BASE_URL = '/api/books';

  private handleError = () => {
    return throwError(() => new Error());
  };

  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.BASE_URL);
  }

  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.BASE_URL}/${id}`);
  }

  addBook(article: IBook): Observable<number> {
    return this.http
      .post<IBook>(this.BASE_URL, article, {
        observe: 'response',
      })
      .pipe(
        map((res) => {
          console.log('From Service', res.status);
          return res.status;
        }),
        catchError(this.handleError)
      );
  }

  updateBook(article: IBook): Observable<number> {
    let updateObject = this.getBookById(article.id);
    return this.http
      .put<IBook>(`${this.BASE_URL}/${article.id}`, updateObject, {
        observe: 'response',
      })
      .pipe(
        map(
          (res) =>
            // console.log("From Service",res.status);
            res.status
        ),
        catchError(this.handleError)
      );
  }

  deleteBook(id: number): Observable<number>{
    return this.http.delete<number>(`${this.BASE_URL}/${id}`, {observe:'response'}).pipe(
      map((statusCode) => statusCode.status),
      catchError(this.handleError)
    )
  }


}

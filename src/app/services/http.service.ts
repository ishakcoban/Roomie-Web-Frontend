import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class HttpService {
  baseURL: string = 'http://localhost:8080/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  createHttpRequest(endpoint: string, requestType: string, data: {}) {
    let headers = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');

    if (this.authService.token != null) {
      headers = headers.set('Authorization', `Bearer ${this.authService.token}`);
    }

    let options = { headers: headers };
    switch (requestType.toUpperCase()) {
      case 'POST':
        return this.http
          .post<any>(this.baseURL + endpoint, data, options)
          .pipe(catchError(this.handleError));

      case 'GET':
        return this.http
          .get(this.baseURL + endpoint, options)
          .pipe(catchError(this.handleError));

      case 'PUT':
        return this.http
          .put(this.baseURL + endpoint, data, options)
          .pipe(catchError(this.handleError));

      case 'PATCH':
        return this.http
          .patch(this.baseURL + endpoint, data, options)
          .pipe(catchError(this.handleError));

      case 'DELETE':
        return this.http
          .delete(this.baseURL + endpoint, options)
          .pipe(catchError(this.handleError));
    }
    return null;
  }

  handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error) {
      return throwError(errorMessage);
    }
    errorMessage = errorRes.error.message;
    return throwError(errorMessage);
  }
}

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
  baseURL: string = 'http://localhost:5101/';
  constructor(private http: HttpClient, private authService: AuthService) {}

  createHttpRequest(endpoint: string, requestType: string, data: {}) {
    let token =
      'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwiZXhwIjoxNjc4OTA1OTY3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxMDEvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MTAxLyJ9.MDpp4dio5mLkTTztEbd2huDhQgGIUTs2JvKsIJXf13Wh1wUZjvEAaM_24PQPd9zKp0sCli4jT4RYfyRvS9DrUw';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
     // .set('Authorization', `bearer ${token}`);

     /* {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, x-requested-with'
      }
    */

    const requestOptions = { headers: headers };
    //console.log(headers)
    switch (requestType.toUpperCase()) {
      case 'POST':
        return this.http.post<any>(this.baseURL + endpoint, data);
      //  .pipe(catchError(this.handleError));

      case 'GET':
        return this.http
          .get(this.baseURL + endpoint, requestOptions)
          .pipe(catchError(this.handleError));

      case 'PUT':
        // headers.append('Authorization', `Bearer ${token}`)
        // console.log(data);
        return this.http
          .put(this.baseURL + endpoint, requestOptions, data)
          .pipe(catchError(this.handleError));

      case 'DELETE':
        return this.http
          .delete(this.baseURL + endpoint, requestOptions)
          .pipe(catchError(this.handleError));
    }
    return null;
  }

  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error) {
      return throwError(errorMessage);
    }
    errorMessage = errorRes.error.message;
    return throwError(errorMessage);
  }
}

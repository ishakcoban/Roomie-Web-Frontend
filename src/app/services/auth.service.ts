import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';
export class AuthService {
  loggedIn: boolean = localStorage.getItem('token') == null ? false : true;
  token: string | null = localStorage.getItem('token');
  decoded!: { exp: Number; iat: Number; jti: string; sub: string };
  private subject = new Subject();

  changeNavbarStatus(_status: boolean) {
    this.subject.next({ status: _status });
  }

  getMessageNavbar(): any {
    return this.subject.asObservable();
  }
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });

    return promise;
  }

  login(token: string) {
    localStorage.setItem('token', token);
    this.loggedIn = true;
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }
  getByUserId() {
    this.decoded = jwt_decode(this.token!);
    return this.decoded.jti;
  }
}

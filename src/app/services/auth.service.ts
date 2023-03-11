import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

export class AuthService {
  loggedIn: boolean = localStorage.getItem('token') == null ? false : true;
  token: string | null = localStorage.getItem('token');
  id: string | null = localStorage.getItem('id');
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

  login(userId: number, token: string) {
    localStorage.setItem('id', userId.toString());
    localStorage.setItem('token', token);
    this.loggedIn = true;
  }

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    this.loggedIn = false;

  }
}

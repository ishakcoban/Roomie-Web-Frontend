import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class AuthService {
  loggedIn: boolean = localStorage.getItem('loggedIn') == null ? false : true;
  token: string | null = localStorage.getItem('token');
  id: string | null = localStorage.getItem('id');
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

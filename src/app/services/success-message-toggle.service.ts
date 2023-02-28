import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SuccessMessageToggleService {
  timer1: string | number | NodeJS.Timeout | undefined;
  timer2: string | number | NodeJS.Timeout | undefined;

  openMessageBox(message:string) {
    document.querySelector('#successMessage')!.innerHTML =  message;

    let toast = document.querySelector('.toast-wrapper');
    let progress = document.querySelector('.progress');

    toast!.classList.add('active');
    progress!.classList.add('active');

    this.timer1 = setTimeout(() => {
      toast!.classList.remove('active');
    }, 5000);

    this.timer2 = setTimeout(() => {
      progress!.classList.remove('active');
    }, 5300);
  }

  closeMessageBox() {
    let toast = document.querySelector('.toast-wrapper')!;
    let progress = document.querySelector('.progress')!;

    toast!.classList.remove('active');

    setTimeout(() => {
      progress!.classList.remove('active');
    }, 300);

    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  }
}

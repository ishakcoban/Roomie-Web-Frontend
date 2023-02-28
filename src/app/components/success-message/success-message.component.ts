import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss'],
})
export class SuccessMessageComponent {
  @Input() message: string = '';
  timer1: any;
  timer2: any;
  showMessage() {

    document.querySelector('.toast')!.classList.add('active');
    document.querySelector('.progress')!.classList.add('active');

      this.timer1 = setTimeout(() => {
        document.querySelector('.toast')!.classList.remove('active');
      }, 5000); //1s = 1000 milliseconds

      this.timer2 = setTimeout(() => {
        document.querySelector('.progress')!.classList.remove('active');
      }, 5300);

    console.log( document.querySelector('.toast')!);
  }
  closeMessage() {

    document.querySelector('.toast')!.classList.remove('active');

    setTimeout(() => {
      document.querySelector('.progress')!.classList.remove('active');
    }, 300);

    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
    console.log('called close');
  }
  deneme() {
    let button = document.querySelector('button');
    let toast = document.querySelector('.toast');
    let closeIcon = document.querySelector('.close');
    let progress = document.querySelector('.progress');

    /* button.addEventListener('click', () => {
      toast.classList.add('active');
      progress.classList.add('active');

      this.timer1 = setTimeout(() => {
        toast.classList.remove('active');
      }, 5000); //1s = 1000 milliseconds

      this.timer2 = setTimeout(() => {
        progress.classList.remove('active');
      }, 5300);
    });*/

    /*  closeIcon.addEventListener('click', () => {
      toast.classList.remove('active');

      setTimeout(() => {
        progress.classList.remove('active');
      }, 300);

      clearTimeout(this.timer1);
      clearTimeout(this.timer2);
    });*/
  }
}

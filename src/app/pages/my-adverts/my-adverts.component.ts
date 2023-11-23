import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-my-adverts',
  templateUrl: './my-adverts.component.html',
  styleUrls: ['./my-adverts.component.scss']
})
export class MyAdvertsComponent {
  cards!: [];


  constructor(
    private popupService: PopupService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.httpService
        .createHttpRequest('api/adverts', 'GET', {})
        ?.subscribe(
          (res) => {
            console.log(res);
            this.cards = res;
          //  this.isLoading = false;
          },
          (error) => {
            console.log(error);
          //  this.isLoading = false;
          }
        );
    }, 2500);
  }

  openPopup() {
    this.popupService.changePopupStatus(true, 'show', 'advert');
  }
}

import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss'],
})
export class AdvertsComponent {
  cards!: [];
  sortStatus: boolean = false;
  filterStatus: boolean = false;
  lastViewedStatus: boolean = false;
  isLoading: boolean = true;

  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.httpService
        .createHttpRequest('api/adverts/getAll', 'GET', {})
        ?.subscribe(
          (res) => {
            console.log(res);
            this.cards = res;
            this.isLoading = false;
            console.log(this.isLoading);
          },
          (error) => {
            console.log(error);
            this.isLoading = false;
          }
        );
    }, 2500);
  }

  switchSort() {
    if (this.sortStatus == false) {
      this.filterStatus = false;
      this.lastViewedStatus = false;
    }
    this.sortStatus = !this.sortStatus;
  }
  switchFilter() {
    if (this.filterStatus == false) {
      this.sortStatus = false;
      this.lastViewedStatus = false;
    }
    this.filterStatus = !this.filterStatus;
  }
  switchLastViewed() {
    if (this.lastViewedStatus == false) {
      this.sortStatus = false;
      this.filterStatus = false;
    }
    this.lastViewedStatus = !this.lastViewedStatus;
  }

  /*ngAfterViewInit() {
    this.isLoading = false;
  }*/

  // Close the dropdown menu if the user clicks outside of it
}

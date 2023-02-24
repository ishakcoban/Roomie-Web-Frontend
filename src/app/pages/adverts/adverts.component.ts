import { Component, HostListener } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss'],
})
export class AdvertsComponent {
  cards: [number] = [0];
  sortStatus: boolean = false;
  constructor(private popupService: PopupService) {
    this.cards.push(1);
    this.cards.push(2);
    this.cards.push(3);
    this.cards.push(4);
  }

  openPopup() {
    this.popupService.changePopupStatus(true, 'show', 'advert');
  }

  switchSort() {
    this.sortStatus = !this.sortStatus;
  }

  // Close the dropdown menu if the user clicks outside of it
}

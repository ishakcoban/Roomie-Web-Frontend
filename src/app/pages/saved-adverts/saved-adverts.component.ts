import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-saved-adverts',
  templateUrl: './saved-adverts.component.html',
  styleUrls: ['./saved-adverts.component.scss']
})
export class SavedAdvertsComponent {
  cards: [number] = [0];


  constructor(private popupService:PopupService) {
    this.cards.push(1);
    this.cards.push(2);
    this.cards.push(3);
    this.cards.push(4);
  }

  openPopup() {
    this.popupService.changePopupStatus(true, 'show', 'advert');
  }
}

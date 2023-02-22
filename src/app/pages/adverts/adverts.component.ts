import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent {

  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.changePopupStatus(true, 'show', 'advert');
  }
}

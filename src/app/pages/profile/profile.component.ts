import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.changePopupStatus(true, 'update', 'profile');
  }
}

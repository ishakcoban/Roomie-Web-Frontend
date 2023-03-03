import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';

@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.scss']
})
export class AdvertCardComponent {
  showInfoStatus:boolean= false;
  bookmarkStatus:boolean=false;

  constructor(private popupService:PopupService,private successMessageToggleService:SuccessMessageToggleService){}
  showInfo(){
    this.showInfoStatus = !this.showInfoStatus;

  }
  switchBookmark(e:Event){
    e.stopPropagation();
    this.successMessageToggleService.openMessageBox('The advert saved successfully!')
    this.bookmarkStatus = !this.bookmarkStatus;
  }
  openPopup() {
    this.popupService.changePopupStatus(true, 'show', 'advert');
  }
}

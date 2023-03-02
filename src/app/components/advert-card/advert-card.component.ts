import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.scss']
})
export class AdvertCardComponent {
  showInfoStatus:boolean= false;
  bookmarkStatus:boolean=false;

  constructor(private popupService:PopupService){}
  showInfo(){
    this.showInfoStatus = !this.showInfoStatus;

  }
  switchBookmark(e:Event){
    e.stopPropagation()
    this.bookmarkStatus = !this.bookmarkStatus;
  }
  openPopup() {
    this.popupService.changePopupStatus(true, 'show', 'advert');
  }
}

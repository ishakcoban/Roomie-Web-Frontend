import { Component } from '@angular/core';

@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.scss']
})
export class AdvertCardComponent {
  showInfoStatus:boolean= false;
  showInfo(){
    this.showInfoStatus = !this.showInfoStatus;

  }
}

import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';

@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.scss'],
})
export class AdvertCardComponent {
  showInfoStatus: boolean = false;
  bookmarkStatus: boolean = false;
  @Input() advert!: {
    id: string;
    header: string;
    description: string;
    city: string;
    district: string;
    neighbourhood: string;
    user: {
      email: string;
      firstName: string;
      gender: string;
      id: string;
      lastName: string;
      photoUrl: string;
      userName: string;
    };
    photos: [
      {
        id: string
        contentType: string
        fileData: string,
        fileName: string
        photoOrder: number
      }
    ];
    floorArea: number;
    rooms: number;
    price: number;
  };
  constructor(
    private popupService: PopupService,
    private successMessageToggleService: SuccessMessageToggleService,
    private httpService: HttpService
  ) {}

  ngOnInit(){
//console.log(this.advert)
  }
  showInfo() {
    this.showInfoStatus = !this.showInfoStatus;
  }
  switchBookmark(e: Event) {
    e.stopPropagation();
    this.httpService
      .createHttpRequest('api/favouriteAdverts/' + this.advert.id, 'PATCH', {})
      ?.subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    this.successMessageToggleService.openMessageBox(
      'The advert saved successfully!'
    );
    this.bookmarkStatus = !this.bookmarkStatus;
  }
  openPopup() {
    this.popupService.changePopupStatus(true, 'show', 'advert');
  }
  editAdvert(e: Event) {
    e.stopPropagation();
    this.popupService.changePopupStatus(true, 'update', 'advert');
  }

  removeAdvert(e: Event) {
    e.stopPropagation();
  }
}

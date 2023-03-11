import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  userData: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    imageUrl: string;
    publicId: string;
  } = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    imageUrl: '',
    publicId: '',
  };
  isLoading: boolean = true;
  constructor(
    private popupService: PopupService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.httpService.createHttpRequest('api/Account/1', 'GET', {})?.subscribe(
        (res) => {
          this.userData.username = res.username;
          this.userData.firstName = res.firstName;
          this.userData.lastName = res.lastName;
          this.userData.email = res.email;
          this.userData.gender = res.gender;
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
    }, 2500);
  }

  openPopup() {
    this.popupService.changePopupStatus(true, 'update', 'profile');
  }
}

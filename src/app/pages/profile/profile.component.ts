import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  userData: {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    imageUrl: string;
    publicId: string;
  } = {
    userName: '',
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
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    
    setTimeout(() => {
      this.httpService
        .createHttpRequest('api/users', 'GET', {})
        ?.subscribe(
          (res) => {
            console.log(res)
            this.userData.userName = res.userName;
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

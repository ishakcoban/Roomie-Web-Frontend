import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { ProfileService } from 'src/app/services/profile.service';

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
  profilePageStatus: boolean = true;

  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.profileService.getMessage().subscribe((data: any) => {
      console.log(data);
      this.fetchData();
    });

    this.fetchData();
  }

  fetchData() {
    this.isLoading = true;
    setTimeout(() => {
      this.httpService.createHttpRequest('api/users', 'GET', {})?.subscribe(
        (res) => {
          this.userData.userName = res.userName;
          this.userData.firstName = res.firstName;
          this.userData.lastName = res.lastName;
          this.userData.email = res.email;
          this.userData.gender = res.gender;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
    }, 2500);
  }

  openPopup() {
    this.popupService.changePopupStatus(true, 'update', 'profile');
  }
}

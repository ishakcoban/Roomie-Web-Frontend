import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PopupService } from 'src/app/services/popup.service';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';
import { LocationService } from 'src/app/services/advert-location.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-popup-update-content',
  templateUrl: './popup-update-content.component.html',
  styleUrls: ['./popup-update-content.component.scss'],
})
export class PopupUpdateContentComponent {
  // Determine the popup target(profile or advert)
  @Input()
  popup!: { status: boolean; type: string; target: string };
  header!: string;
  oldUsername!: string;
  oldFirstName!: string;
  oldLastName!: string;
  oldGender!: string;
  oldEmail!: string;
  disabled: boolean = true;
  usernameInputValue!: string;
  firstNameInputValue!: string;
  lastNameInputValue!: string;
  emailInputValue!: string;
  genderInputValue!: string;
  isLoading: boolean = false;
  isPopupLoading: boolean = true;
  popupTarget: string = '';
  errorMessage: string = '';
  genders: string[] = [];
  @ViewChild('myname')
  selectTag!: ElementRef;
  cities: string[] = [];
  public trigger: boolean = true;
  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private authService: AuthService,
    private successMessageToggleService: SuccessMessageToggleService,
    private locationService: LocationService,
    private httpClient: HttpClient,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    //this.cities = await this.locationService.getAllCities();
    setTimeout(() => {
      this.httpService
        .createHttpRequest('api/users', 'GET', {})
        ?.subscribe((res) => {
          console.log(res);
          this.oldUsername = res.userName;
          this.usernameInputValue = res.userName;
          this.oldFirstName = res.firstName;
          this.firstNameInputValue = res.firstName;
          this.oldLastName = res.lastName;
          this.lastNameInputValue = res.lastName;
          this.oldEmail = res.email;
          this.emailInputValue = res.email;
          this.oldGender = res.gender;
          this.genderInputValue = res.gender;
          this.genders.push('Male', 'Female');

          // inserting gender value to html tag
          /* var selectTagOptions = Array.from(
            this.selectTag.nativeElement.options
          );
          let index = 0;*/
          //console.log(selectTagOptions);
          /* selectTagOptions.map((option: any) => {
            if (option.value == 'male') {
              this.genderInputValue = option.value;
              this.selectTag.nativeElement.selectedIndex = index;
            }

            index++;
          });*/

          this.isPopupLoading = false;
        });
    }, 1000);
  }

  checkInputValuesWithOldValues() {
    if (this.oldUsername != this.usernameInputValue) {
      return false;
    }

    if (this.oldFirstName != this.firstNameInputValue) {
      return false;
    }

    if (this.oldLastName != this.lastNameInputValue) {
      return false;
    }

    if (this.oldEmail != this.emailInputValue) {
      return false;
    }

    if (
      this.genderInputValue != '' &&
      this.oldGender != this.genderInputValue
    ) {
      return false;
    }

    return true;
  }

  inputStatus() {
    this.disabled = this.checkInputValuesWithOldValues();
  }

  selectGender(event: Event) {
    this.genderInputValue = (event.target as HTMLInputElement).value.toString();
    this.inputStatus();
  }

  ngAfterViewInit() {
    //this.isLoading = true;
    //this.errorMessage = 'sadasdasd';
  }

  onSubmit(form: NgForm) {
    let data = {
      //id: this.authService.getByUserId(),
      userName: this.usernameInputValue,
      email: this.emailInputValue,
      gender: this.genderInputValue,
      firstName: this.firstNameInputValue,
      lastName: this.lastNameInputValue,
    };
    this.isLoading = true;
    setTimeout(() => {
      this.httpService.createHttpRequest('api/users', 'PUT', data)?.subscribe(
        (res) => {
          console.log(res);
          this.successMessageToggleService.openMessageBox(
            'Your information updated successfully!'
          );

          this.profileService.changeProfilePageStatus(false);
          // close popup
          this.popupService.changePopupStatus(false, '-', '-');
        },
        (error) => {
          console.log(error);
        }
      );
      this.isLoading = false;
    }, 1500);
  }
}

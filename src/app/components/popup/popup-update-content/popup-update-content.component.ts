import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PopupService } from 'src/app/services/popup.service';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';
import { LocationService } from 'src/app/services/advert-location.service';
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
  isLoading: boolean = true;
  popupTarget: string = '';
  errorMessage: string = '';
  genders: string[] = [];
  @ViewChild('myname')
  selectTag!: ElementRef;
  cities: string[] = [];
  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private authService: AuthService,
    private successMessageToggleService: SuccessMessageToggleService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    //this.cities = await this.locationService.getAllCities();
    setTimeout(() => {
      this.httpService
        .createHttpRequest('api/Account/1', 'GET', {})
        ?.subscribe((res) => {
          this.oldUsername = res.username;
          this.usernameInputValue = res.username;
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

          this.isLoading = false;
        });
    }, 1000);
  }

  checkInputValuesWithOldValues() {
    if (
      this.oldUsername !=
      (document.getElementById('username')! as HTMLSelectElement).value
    ) {
      return false;
    }

    if (
      this.oldFirstName !=
      (document.getElementById('firstname')! as HTMLSelectElement).value
    ) {
      return false;
    }

    if (
      this.oldLastName !=
      (document.getElementById('lastname')! as HTMLSelectElement).value
    ) {
      return false;
    }

    if (
      this.oldEmail !=
      (document.getElementById('email')! as HTMLSelectElement).value
    ) {
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
      ApplicationUserId: 1,
      Username: (document.getElementById('username')! as HTMLSelectElement)
        .value,
      Email: (document.getElementById('email')! as HTMLSelectElement).value,
      Gender: (document.getElementById('genders')! as HTMLSelectElement).value,
      FirstName: (document.getElementById('firstname')! as HTMLSelectElement)
        .value,
      LastName: (document.getElementById('lastname')! as HTMLSelectElement)
        .value,
      PublicId: null,
      ImageUrl:
        null,
    };
    setTimeout(() => {
      this.httpService.createHttpRequest('api/Account', 'PUT', data)?.subscribe(
        (res) => {
          console.log(res);
          this.successMessageToggleService.openMessageBox(
            'Your information updated successfully!'
          );

          // close popup
          this.popupService.changePopupStatus(false, '-', '-');
        },
        (error) => {
          console.log(error);
        }
      );
    }, 1500);
  }
}

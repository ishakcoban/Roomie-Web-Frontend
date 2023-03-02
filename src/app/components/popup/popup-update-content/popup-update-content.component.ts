import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PopupService } from 'src/app/services/popup.service';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';
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
  popupTarget: string = '';
  errorMessage:string = '';
  @ViewChild('myname')
  selectTag!: ElementRef;
  constructor(
    private http: HttpClient,
    private popupService: PopupService,
    private httpService: HttpService,
    private authService: AuthService,
    private successMessageToggleService: SuccessMessageToggleService
  ) {}

  ngOnInit() {
    // get user information
    /*   this.httpService.createHttpRequest('api/Account/13', 'GET', {})?.subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );*/
    // inserting old values to input area
  }

  checkInputValuesWithOldValues() {
    console.log(
      (document.getElementById('genders')! as HTMLSelectElement).value
    );
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
    this.errorMessage = 'sadasdasd'
    setTimeout(() => {
      this.http
        .get<any>('https://api.npms.io/v2/search?q=scope:angular')
        .subscribe((data) => {
          this.oldUsername = data.results[0].package.name;
          this.usernameInputValue = data.results[0].package.name;
          this.oldFirstName = data.results[0].package.name;
          this.firstNameInputValue = data.results[0].package.name;
          this.oldLastName = data.results[0].package.name;
          this.lastNameInputValue = data.results[0].package.name;
          this.oldEmail = data.results[0].package.name;
          this.emailInputValue = data.results[0].package.name;
          this.oldGender = 'male';
          this.genderInputValue = 'male';

          // inserting gender value to html tag
          var selectTagOptions = Array.from(
            this.selectTag.nativeElement.options
          );
          let index = 0;
          //console.log(selectTagOptions);
          selectTagOptions.map((option: any) => {
            if (option.value == 'male') {
              this.genderInputValue = option.value;
              this.selectTag.nativeElement.selectedIndex = index;
            }

            index++;
          });

          //this.isLoading = false;
        });
    }, 1000);
  }

  onSubmit(form: NgForm) {
    this.successMessageToggleService.openMessageBox(
      'Your information updated successfully!'
    );
    this.popupService.changePopupStatus(false, '-', '-');
    /*let data = {
      ApplicationUserId: this.authService.id,
      Username: (document.getElementById('username')! as HTMLSelectElement)
        .value,
      Email: (document.getElementById('email')! as HTMLSelectElement).value,
      Gender: (document.getElementById('genders')! as HTMLSelectElement).value,
      FirstName: (document.getElementById('firstname')! as HTMLSelectElement)
        .value,
      LastName: (document.getElementById('lastname')! as HTMLSelectElement)
        .value,
      PublicId: 'h6hn8qajao1ui0xpmdrh',
      ImageUrl:
        'https://res.cloudinary.com/ddkjxhjyy/image/upload/v1675018114/h6hn8qajao1ui0xpmdrh.jpg',
    };
    setTimeout(() => {
      // close popup
      this.popupService.changePopupStatus(false, '-', '-');
    }, 1500);*/
  }
}

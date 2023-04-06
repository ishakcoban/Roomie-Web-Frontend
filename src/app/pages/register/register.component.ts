import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isVisible: boolean = false;
  isVisible2: boolean = false;
  isLoading: boolean = false;
  username!: string;
  firstName!: string;
  lastName!: string;
  gender!: string;
  email!: string;
  password!: string;
  passwordAgain!: string;
  errorMessage: string = '';
  constructor(
    private authService: AuthService,
    private httpService: HttpService,
    private router: Router,
    private successMessageToggleService: SuccessMessageToggleService
  ) {}
  onSubmit(form: NgForm) {
 
    let data = {
      userName: form.value.username.toString(),
      firstName: form.value.firstName.toString(),
      lastName: form.value.lastName.toString(),
      gender: this.gender,
      email: form.value.email.toString(),
      photoUrl: null,
      password: form.value.password.toString().trim(),
    };

    if (
      data.userName.length == 0 ||
      data.firstName.length == 0 ||
      data.lastName.length == 0 ||
      data.gender == undefined ||
      data.email.length == 0 ||
      data.password.length == 0 ||
      form.value.passwordAgain.toString().length == 0
    ) {
      this.errorMessage = 'You must fill all the areas!';
    } else if (form.value.password != form.value.passwordAgain) {
      this.errorMessage = "Passwords don't match each other!";
    } else {
      this.errorMessage = '';
      this.isLoading = true;
      setTimeout(() => {
        this.httpService
          .createHttpRequest('/auth/register', 'POST', data)
          ?.subscribe(
            (res) => {
              this.errorMessage = '';
              this.successMessageToggleService.openMessageBox(
                'You registered successfully!'
              );
              this.router.navigate(['/login']);
            },
            (error) => {
              console.log(error);
              if (error.status == 400) {
                this.errorMessage = 'Not valid!';
              }
            }
          );
        this.isLoading = false;
      }, 2500);
    }
  }

  selectGender(event: Event) {
    this.gender = (event.target as HTMLInputElement).value.toString();
  }
  switchPassword() {
    this.isVisible = !this.isVisible;
  }
  switchPassword2() {
    this.isVisible2 = !this.isVisible2;
  }
}

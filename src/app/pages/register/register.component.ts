import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

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
  errorMessage:string = '';
  constructor(private authService: AuthService,private httpService:HttpService,private router:Router) {}
  onSubmit(form: NgForm) {
    let data = {
      Username: form.value.username.toString(),
      Email: form.value.email.toString(),
      Gender: this.gender,
      FirstName: form.value.firstName.toString(),
      LastName: form.value.lastName.toString(),
      Password: form.value.password.toString().trim()
    };

    if (
      data.Username.length == 0 ||
      data.FirstName.length == 0 ||
      data.LastName.length == 0 ||
      data.Email.length == 0 ||
      data.Gender.length == undefined ||
      data.Password.length == 0 ||
      this.passwordAgain.length == 0
    ) {
      this.errorMessage = 'You must fill all the areas!';
    } else if (data.Password != this.passwordAgain) {
      this.errorMessage = "Passwords don't match each other!";
    } else {

      this.errorMessage = '';
      this.isLoading = true;
      setTimeout(() => {
        this.httpService
          .createHttpRequest('api/Account/register', 'POST', data)
          ?.subscribe(
            (res) => {
              console.log(res);

              this.errorMessage = '';
              this.router.navigate(['/login']);
            },
            (error) => {
              if (error.status == 400) {
                this.errorMessage = 'Email or password is not valid!';
              }
              console.log(error.status);
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

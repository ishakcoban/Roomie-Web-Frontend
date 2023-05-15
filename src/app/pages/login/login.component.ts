import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isVisible: boolean = false;
  email!: string;
  password!: string;
  errorMessage: string = '';
  isLoading: boolean = false;
  constructor(
    private authService: AuthService,
    private httpService: HttpService,
    private router: Router,
    private successMessageToggleService: SuccessMessageToggleService
  ) {}
  onSubmit(form: NgForm) {
    let data = {
      email: form.value.email.toString().trim(),
      password: form.value.password.toString().trim(),
    };
    /* if (this.checkInputType(form.value.email)) {

      data = {
        email: form.value.email.toString().trim(),
        password: form.value.password.toString().trim(),
      }
    }else{
      data = {
        userName: form.value.email.toString().trim(),
        password: form.value.password.toString().trim(),
      }
    }*/

    if (form.value.email.length == 0 || form.value.password.length == 0) {
      this.errorMessage = 'You must fill all the areas!';
    } else {
      this.errorMessage = '';
      this.isLoading = true;
      setTimeout(() => {
        this.httpService
          .createHttpRequest('api/auth/login', 'POST', data)
          ?.subscribe(
            (res) => {
              console.log(res);

              this.errorMessage = '';
              this.authService.login(res.token);
              this.authService.changeNavbarStatus(true);
              this.router.navigate(['/']);
            },
            (error) => {
              if (error.status == 400) {
                this.errorMessage = 'Email or password is not valid!';
              }
              console.log(error);
            }
          );
        this.isLoading = false;
      }, 2500);
    }
  }
  switchPassword() {
    this.isVisible = !this.isVisible;
  }

  checkInputType(userInfo: string) {
    if (
      userInfo
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return true;
    }

    return false;
  }
}

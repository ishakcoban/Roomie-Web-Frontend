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
      Email: form.value.email.toString().trim(),
      Password: form.value.password.toString().trim(),
    };

    if (data.Email.length == 0 || data.Password.length == 0) {
      this.errorMessage = 'You must fill all the areas!';
    } else {
      this.errorMessage = '';
      this.isLoading = true;
      setTimeout(() => {
        this.httpService
          .createHttpRequest('api/Account/login', 'POST', data)
          ?.subscribe(
            (res) => {
              console.log(res);

              this.errorMessage = '';
              this.authService.login(res.applicationUserId,res.token)
              this.authService.changeNavbarStatus(true);
              //this.router.navigate(['/home']);
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
  switchPassword() {
    this.isVisible = !this.isVisible;
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isVisible: boolean = false;

  constructor(private authService: AuthService) {}
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
  switchPassword() {
    this.isVisible = !this.isVisible;
  }
}

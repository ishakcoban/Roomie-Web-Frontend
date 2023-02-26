import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isVisible: boolean = false;
  isVisible2: boolean = false;
  constructor(private authService: AuthService) {}
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
  switchPassword() {
    this.isVisible = !this.isVisible;
  }
  switchPassword2() {
    this.isVisible2 = !this.isVisible2;
  }
}

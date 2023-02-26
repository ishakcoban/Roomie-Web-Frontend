import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading:boolean = true

  ngAfterViewInit(){
      this.isLoading= false;

  }
  constructor(private authService: AuthService) {}
  onSubmit() {
    this.authService.logout();
  }


}

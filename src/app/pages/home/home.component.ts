import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading:boolean = true;

  constructor(private authService: AuthService,private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(){
      this.isLoading= false;
      this.cdr.detectChanges();
  }
  
  onSubmit() {
    this.authService.logout();
  }


}

import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading: boolean = true;
 // imageData!: string; // Replace this with your actual image data
 // fileName!: string;
  constructor(private authService: AuthService, private cdr: ChangeDetectorRef, private httpService: HttpService) { }
  ngOnInit() {

    
   /* this.httpService.createHttpRequest('api/advertPhotos/getAll', 'GET',{})
      ?.subscribe((res) => {
        this.imageData = res[0].fileData;
        this.fileName = res[0].fileName
        console.log(res[0]);

      },
        (error) => {

          console.log(error);
        });*/
  }
  ngAfterViewInit() {
    this.isLoading = false;

    this.cdr.detectChanges();
  }

  onSubmit() {
    this.authService.logout();
  }


}

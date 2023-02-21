import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from '../../services/auth.service';
//import { HttpService } from '../../services/http.service';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  popupStatus: boolean = false;
  popupData: {status: boolean,type:string,target:string}= {
    status: false,
    type: '',
    target: ''
  };

  constructor(
    private popupService: PopupService,
    //private authService: AuthService,
    //private httpService: HttpService,
    private router: Router
  ) {
    
  }
  ngOnInit() {
    console.log('called'+  'asdasdasdas');
    this.popupService.getMessage().subscribe((data:any) => {
      
      this.popupStatus = data.status;
      this.popupData = data;
    });
  }

  getPopupData(){

  }

  changePopupStatus() {
    this.popupService.changePopupStatus(false,'-','-');
  }

  /*removeAccount() {
    this.httpService.createHttpRequest('/api/user', 'DELETE', {}).subscribe(
      (res) => {
        console.log(res);
        this.authService.logout();
        this.popupService.changePopupStatus(false);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }*/

  /*createList(form: NgForm) {
    const data = {
      name: form.value.name,
    };
    this.httpService.createHttpRequest('/api/list', 'POST', data).subscribe(
      (res) => {
        console.log(res);
        this.popupService.changePopupStatus(false);
        this.router.navigate(['/lists']);
      },
      (error) => {
        console.log(error);
      }
    );
  }*/

  avoidClosing(e:Event){
    e.stopPropagation()
    
  }
}
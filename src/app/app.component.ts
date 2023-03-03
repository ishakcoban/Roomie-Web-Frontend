import { Component, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import Swiper from 'swiper';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'roomie-web';
  inputInfo3: { type: string; name: string; header: string } = {
    type: 'text',
    name: 'gender',
    header: 'Gender',
  };
  inputInfo4: { type: string; name: string; header: string } = {
    type: 'text',
    name: 'name',
    header: 'Name',
  };
  isVisible: boolean = false;
  navStatus: boolean = false;
  auth: boolean;
  constructor(private router: Router, private authService: AuthService) {
    this.auth = authService.loggedIn;
  }

  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
    if ($('div').attr('background-color') == '#E0E0E0') {
      console.log(this.router.url);
    }
    /*if ( $('#select').prop('hidden')) {
      console.log($('#select').prop('hidden'))
    }*/

    //console.log($( 'select' ).attr('disabled'))
  }
  ngDoCheck() {
    this.auth = this.authService.loggedIn;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}

import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../../services/auth.service';
import * as $ from 'jquery';
import { AuthService } from 'src/app/services/auth.service';
import { PopupService } from 'src/app/services/popup.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  auth: boolean = localStorage.getItem('token') == null ? false : true;
  constructor(
    private popupService: PopupService,
    private authService: AuthService,
    private router: Router
  ) {}

  onLogout() {
    this.authService.logout();
    this.authService.changeNavbarStatus(false);
    this.router.navigate(['/login']);
  }
  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
    if (element.classList.contains('ddown')) {
      if (!$('.navbar-dropdown').hasClass('show')) {
        $('.navbar-dropdown').addClass('show');
        $('.dropdown-wrapper').addClass('show-hover');
      } else {
        $('.navbar-dropdown').removeClass('show');
        $('.dropdown-wrapper').removeClass('show-hover');
      }
    } else {
      $('.navbar-dropdown').removeClass('show');
      $('.dropdown-wrapper').removeClass('show-hover');
    }
    /*for small size dropdown on navbar*/

    if ($('.navbar-small-size-dropdown').hasClass('show')) {
      $('.navbar-small-size-dropdown').removeClass('show');
      $('.nav-open').removeClass('d-none');
      $('.nav-close').addClass('d-none');
    } else {
      if (element.classList.contains('nav-open')) {
        $('.nav-open').addClass('d-none');
        $('.nav-close').removeClass('d-none');
        $('.navbar-small-size-dropdown').addClass('show');
      }
      if (element.classList.contains('nav-close')) {
        $('.nav-close').addClass('d-none');
        $('.nav-open').removeClass('d-none');
      }
    }
  }

  openPopup() {
    this.popupService.changePopupStatus(true, 'create', 'advert');
  }

  onSubmit() {
    this.authService.logout();
  }

  ngOnInit() {
    this.authService
      .getMessageNavbar()
      .subscribe((data: { status: boolean }) => {
        this.auth = data.status;
      });
  }
}

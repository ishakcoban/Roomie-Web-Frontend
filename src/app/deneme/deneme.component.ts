import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SuccessMessageToggleService } from '../services/success-message-toggle.service';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss'],
})
export class DenemeComponent {

  constructor(
    private successMessageToggleService: SuccessMessageToggleService
  ) {}

  closeMessageBox() {
    this.successMessageToggleService.closeMessageBox();
  }
}

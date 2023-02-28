import { Component, Input } from '@angular/core';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss'],
})
export class SuccessMessageComponent {
  constructor(
    private successMessageToggleService: SuccessMessageToggleService
  ) {}

  closeMessageBox() {
    this.successMessageToggleService.closeMessageBox();
  }
}

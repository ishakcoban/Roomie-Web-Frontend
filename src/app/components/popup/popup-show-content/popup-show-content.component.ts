import { Component, Input } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-popup-show-content',
  templateUrl: './popup-show-content.component.html',
  styleUrls: ['./popup-show-content.component.scss'],
})
export class PopupShowContentComponent {
  @Input()
  popup!: { status: boolean; type: string; target: string };

  constructor(private popupService: PopupService) {}

  changePopupStatus() {
    this.popupService.changePopupStatus(false, '-', '-');
  }
}

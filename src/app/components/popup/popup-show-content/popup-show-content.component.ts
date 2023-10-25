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
  bookmarkStatus: boolean = false;
  images = [
    'https://elleparalia.gr/wp-content/uploads/2022/09/brakfast-4-copy-1200x800.jpg',
    'https://images.pexels.com/photos/2395264/pexels-photo-2395264.jpeg',
    'https://images.pexels.com/photos/2474014/pexels-photo-2474014.jpeg',
    'https://images.pexels.com/photos/2440296/pexels-photo-2440296.jpeg',
  ];
  constructor(private popupService: PopupService) {}

  changePopupStatus() {
    this.popupService.changePopupStatus(false, '-', '-');
  }

  editAdvert(e: Event) {
    e.stopPropagation();
    this.popupService.changePopupStatus(true, 'update', 'advert');
  }

  removeAdvert(e: Event) {
    e.stopPropagation();
  }

  switchBookmark(e: Event) {
    e.stopPropagation();
  }
}

import { Component } from '@angular/core';
import { NgxSwiperConfig } from 'ngx-image-swiper';

@Component({
  selector: 'app-photo-slider',
  templateUrl: './photo-slider.component.html',
  styleUrls: ['./photo-slider.component.scss'],
})
export class PhotoSliderComponent {
  swiperConfig: NgxSwiperConfig = {
    navigationPlacement: 'inside',
    pagination: true,
    paginationPlacement: 'inside',
    borderRadius: 0,
    loop: false,
    keyboardNavigation: false,
    imgBackgroundSize: 'contain',
    swipeThreshold:5,
    
  };

  images = [
    'https://elleparalia.gr/wp-content/uploads/2022/09/brakfast-4-copy-1200x800.jpg',
    'https://images.pexels.com/photos/2395264/pexels-photo-2395264.jpeg',
    'https://images.pexels.com/photos/2474014/pexels-photo-2474014.jpeg',
    'https://images.pexels.com/photos/2440296/pexels-photo-2440296.jpeg',
  ];
}

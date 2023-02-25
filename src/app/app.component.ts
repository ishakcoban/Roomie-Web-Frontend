import { Component, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";
import Swiper from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roomie-web';
  inputInfo3:{type:string,name:string,header:string} = {type:'text',name:'gender',header:'Gender'}
  inputInfo4:{type:string,name:string,header:string} = {type:'text',name:'name',header:'Name'}
  isVisible:boolean = false;

  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
    if ( $('div').attr('background-color') == '#E0E0E0' ) {
      console.log('called')
    }
    /*if ( $('#select').prop('hidden')) {
      console.log($('#select').prop('hidden'))
    }*/

    


    //console.log($( 'select' ).attr('disabled'))
    console.log('called')
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } 
  onSubmit(form: NgForm) {
    console.log(form.value)
  }
}

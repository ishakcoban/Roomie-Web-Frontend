import { Component, HostListener, Input } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  // type for input's type(text or password)
  // name for input's name(email,password,usernam,gender,city,district,neighbourhood,)
  // header for input's header(text or password)
  // background_color for input's background color(text or password)
  @Input() input_style:{type:string,name:string,header:string,background_color:string} ={
    type: '',
    name: '',
    header: '',
    background_color:''
  };
  inputOptions!: [];
  isVisible: boolean = false;
  isPasswordType:boolean= false;

  ngOnInit(){
    /*switch (this.input_style) {
      case 'gender':
        
        break;
    
      default:
        break;
    }*/
  }


  inputHandler(event: any) {
    console.log(event.target.value);
  }

  switchPassword() {
    this.isVisible = !this.isVisible;
  }

}

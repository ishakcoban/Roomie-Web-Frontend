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
  // type for input's type(text or password)
  // type for input's type(text or password)
  @Input() input_style:{type:string,name:string,header:string} ={
    type: '',
    name: '',
    header: ''
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


  sss(event: any) {
    console.log(event.target.value);
  }

  switchPassword() {
    this.isVisible = !this.isVisible;
  }

}

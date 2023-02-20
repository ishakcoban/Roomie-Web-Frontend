import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  inputInfo1:{type:string,name:string,header:string} = {type:'text',name:'email',header:'Email Address'}
  inputInfo2:{type:string,name:string,header:string} = {type:'password',name:'password',header:'Password'}

}

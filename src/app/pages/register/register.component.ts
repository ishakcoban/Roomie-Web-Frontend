import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  inputInfo1:{type:string,name:string,header:string} = {type:'text',name:'username',header:'Username'}
  inputInfo2:{type:string,name:string,header:string} = {type:'text',name:'firstName',header:'First Name'}
  inputInfo3:{type:string,name:string,header:string} = {type:'text',name:'lastName',header:'Last Name'}
  inputInfo4:{type:string,name:string,header:string} = {type:'text',name:'gender',header:'Gender'}
  inputInfo5:{type:string,name:string,header:string} = {type:'text',name:'email',header:'Email'}
  inputInfo6:{type:string,name:string,header:string} = {type:'password',name:'password',header:'Password'}
  inputInfo7:{type:string,name:string,header:string} = {type:'password',name:'passwordAgain',header:'Password(Again)'}

}

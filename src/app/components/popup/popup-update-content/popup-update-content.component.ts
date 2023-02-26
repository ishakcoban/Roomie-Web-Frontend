import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-update-content',
  templateUrl: './popup-update-content.component.html',
  styleUrls: ['./popup-update-content.component.scss']
})
export class PopupUpdateContentComponent {
  @Input()
  popup!: { status: boolean; type: string; target: string; };
  header!: string;
  inputInfo1:{type:string,name:string,header:string,background_color:string} = {type:'text',name:'username',header:'Username',background_color:'black'}
  inputInfo2:{type:string,name:string,header:string,background_color:string} = {type:'text',name:'firstName',header:'First Name',background_color:'black'}
  inputInfo3:{type:string,name:string,header:string,background_color:string} = {type:'text',name:'lastName',header:'Last Name',background_color:'black'}
  inputInfo4:{type:string,name:string,header:string,background_color:string} = {type:'text',name:'gender',header:'Gender',background_color:'black'}
  inputInfo5:{type:string,name:string,header:string,background_color:string} = {type:'text',name:'email',header:'Email',background_color:'black'}
  inputInfo6:{type:string,name:string,header:string,background_color:string} = {type:'password',name:'password',header:'Password',background_color:'black'}

  ngOnInit() {
    /*switch (this.popup.target) {
      case 'list':
        this.header = 'Update the list’s name';
        break;
      case 'task':
        this.header = 'Update the task’s name';
        break;
    }*/
  }
}

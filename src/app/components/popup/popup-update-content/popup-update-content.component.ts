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
  inputInfo1:{type:string,name:string,header:string} = {type:'text',name:'username',header:'Username'}
  inputInfo2:{type:string,name:string,header:string} = {type:'text',name:'firstName',header:'First Name'}
  inputInfo3:{type:string,name:string,header:string} = {type:'text',name:'lastName',header:'Last Name'}
  inputInfo4:{type:string,name:string,header:string} = {type:'text',name:'gender',header:'Gender'}
  inputInfo5:{type:string,name:string,header:string} = {type:'text',name:'email',header:'Email'}
  inputInfo6:{type:string,name:string,header:string} = {type:'password',name:'password',header:'Password'}

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

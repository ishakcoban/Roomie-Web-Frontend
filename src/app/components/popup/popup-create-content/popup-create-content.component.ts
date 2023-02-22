import { Component, Input } from '@angular/core';
import { LocationService } from 'src/app/services/advert-location.service';

@Component({
  selector: 'app-popup-create-content',
  templateUrl: './popup-create-content.component.html',
  styleUrls: ['./popup-create-content.component.scss']
})
export class PopupCreateContentComponent {
  @Input()
  popup!: { status: boolean; type: string; target: string; };
  header!: string;
  inputInfo1:{type:string,name:string,header:string} = {type:'text',name:'title',header:'Title'}
  inputInfo2:{type:string,name:string,header:string} = {type:'text',name:'content',header:'Content'}
  inputInfo3:{type:string,name:string,header:string} = {type:'text',name:'city',header:'City'}
  inputInfo4:{type:string,name:string,header:string} = {type:'text',name:'district',header:'District'}
  inputInfo5:{type:string,name:string,header:string} = {type:'text',name:'neighbourhood',header:'Neighbourhood'}
  inputInfo6:{type:string,name:string,header:string} = {type:'text',name:'floorArea',header:'FloorArea(M2)'}
  inputInfo7:{type:string,name:string,header:string} = {type:'text',name:'floorArea',header:'FloorArea(M2)'}
  inputInfo8:{type:string,name:string,header:string} = {type:'text',name:'rooms',header:'Rooms'}
  inputInfo9:{type:string,name:string,header:string} = {type:'text',name:'description',header:'Description'}
  cities:[]=[];
  constructor(private locationService:LocationService){}

  async ngOnInit() {
    //this.cities.push(await this.locationService.getAllCities());
    /*switch (this.popup.target) {
      case 'list':
        this.header = 'Update the list’s name';
        break;
      case 'task':
        this.header = 'Update the task’s name';
        break;
    }*/
  }
  /*var upload = document.getElementById('upload');

function onFile() {
    var me = this,
        file = upload.files[0],
        name = file.name.replace(/\.[^/.]+$/, '');

    if (file.type === '' ||
        file.type === 'audio/mp3' ||       
        file.type === 'file/text' ||
        file.type === 'audio/mpeg' ||
        file.type === 'audio/wav' ||
        file.type === 'audio/x-wav' ||
        file.type === 'audio/wave' ||
        file.type === 'audio/x-pn-wav') {
        if (file.size < (3000 * 1024)) {
            upload.parentNode.className = 'area uploading';
        } else {
            window.alert('File size is too large, please ensure you are uploading a file of less than 3MB');
        }
    } else {
        window.alert('File type ' + file.type + ' not supported');
    }
}

upload.addEventListener('dragenter', function (e) {
    upload.parentNode.className = 'area dragging';
}, false);

upload.addEventListener('dragleave', function (e) {
    upload.parentNode.className = 'area';
}, false);

upload.addEventListener('dragdrop', function (e) {
    onFile();
}, false);

upload.addEventListener('change', function (e) {
    onFile();
}, false);*/
}

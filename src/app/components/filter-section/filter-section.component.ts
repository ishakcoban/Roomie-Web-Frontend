import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent {
  inputInfo1:{type:string,name:string,header:string} = {type:'text',name:'city',header:'City'}
  inputInfo2:{type:string,name:string,header:string} = {type:'text',name:'district',header:'District'}
  inputInfo3:{type:string,name:string,header:string} = {type:'text',name:'neighbourhood',header:'Neighbourhood'}
  inputInfo4:{type:string,name:string,header:string} = {type:'text',name:'floorArea',header:'FloorArea(M2)'}
  inputInfo5:{type:string,name:string,header:string} = {type:'text',name:'rooms',header:'Rooms'}
}

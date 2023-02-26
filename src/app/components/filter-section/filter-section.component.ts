import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent {
  inputInfo1:{type:string,name:string,header:string,background_color:string} = {type:'text',name:'city',header:'City',background_color:'black'}
  inputInfo2:{type:string,name:string,header:string,background_color:string} = {type:'text',name:'district',header:'District',background_color:'black'}
  inputInfo3:{type:string,name:string,header:string,background_color:string} = {type:'text',name:'neighbourhood',header:'Neighbourhood',background_color:'black'}
  inputInfo4:{type:string,name:string,header:string,background_color:string} = {type:'text',name:'floorArea',header:'FloorArea(M2)',background_color:'black'}
  inputInfo5:{type:string,name:string,header:string,background_color:string} = {type:'text',name:'rooms',header:'Rooms',background_color:'black'}
}

import { Component } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-sorting-section',
  templateUrl: './sorting-section.component.html',
  styleUrls: ['./sorting-section.component.scss']
})
export class SortingSectionComponent {

constructor(){
  console.log('called')
  
}

ngOnInit(){
  //$("#checkbox").prop("checked",false)
}
  controlSwitch(){
   console.log($("#checkbox").prop("checked"));
  }
}

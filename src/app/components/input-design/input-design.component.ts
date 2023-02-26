import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-design',
  templateUrl: './input-design.component.html',
  styleUrls: ['./input-design.component.scss']
})
export class InputDesignComponent {
  @Input() background_color:string = '';
  @Input() header_background_color:string = '';
  @Input() header:string = '';
}

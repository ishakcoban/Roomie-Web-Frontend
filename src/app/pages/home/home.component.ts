import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading:boolean = true

  ngAfterViewInit(){

    setTimeout(()=>{
      this.isLoading= false;
    },2000)
  }

}

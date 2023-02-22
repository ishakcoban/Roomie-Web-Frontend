import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private subject = new Subject();

  async readLocation(){
    let response = await fetch('../../assets/data.json');
    return response.json();

  }

  async getAllCities(/*_city: string,_description:string,_neighbourhood:string*/) {
    let locationData = await this.readLocation();
    console.log(locationData);
    let cities = [];
    cities.push('Select a city')

    locationData.forEach((element: any) => {
        cities.push(element.name)
    });

    return cities;
  }
  getAllDistricts(){

  }
  getAllNeighbourhoods(){
    
  }
getMessage():any {
    return this.subject.asObservable();
  }
}
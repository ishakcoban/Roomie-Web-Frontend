import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private subject = new Subject();

  async readLocation() {
    let response = await fetch('../../assets/data.json');
    return response.json();
  }

  async getAllCities() {
    let locationData = await this.readLocation();
    console.log(locationData);
    let cities: string[] = [];

    locationData.forEach((element: any) => {
      cities.push(element.name);
    });

    return cities;
  }

  async getAllDistricts() {
    let locationData = await this.readLocation();

   /* districts = [];

    int count = 0;
    data.insert(0, '');

    for (var element in getData[selectedCityOfIndex]['towns']) {
      if (count == 0) {
        districts.add('District');
      }
      districts.add(element['name']);

      count++;
    }*/
  }

  async selectCity() {
    let locationData = await this.readLocation();
    console.log(locationData);
    let cities: string[] = [];

    locationData.forEach((element: any) => {
      cities.push(element.name);
    });

    return cities;
  }

  getAllNeighbourhoods() {}
  getMessage(): any {
    return this.subject.asObservable();
  }
}

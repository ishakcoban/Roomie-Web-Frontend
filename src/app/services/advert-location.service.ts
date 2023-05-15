import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private subject = new Subject();
  selectedCity?: number
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

  async getAllDistricts(selectedCity: number) {
    let locationData = await this.readLocation();
    this.selectedCity = selectedCity
    let districts: string[] = [];
    locationData[selectedCity]['towns'].forEach((element: any) => {
      districts.push(element.name);
    });
    return districts;
  }

  async getAllNeighbourhoods(selectedDistrict: number) {
    let locationData = await this.readLocation();

    let neighbourhoods: string[] = [];
    locationData[this.selectedCity!]['towns'][selectedDistrict].districts.forEach((element: any) => {
      element.quarters.forEach((element: any) => {
        neighbourhoods.push(element.name)
      });
    });
    return neighbourhoods;
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

  getMessage(): any {
    return this.subject.asObservable();
  }
}

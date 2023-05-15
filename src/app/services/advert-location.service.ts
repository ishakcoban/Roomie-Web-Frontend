import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private subject = new Subject();
  selectedCity?: string;
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

  async getAllDistricts(selectedCity: string) {
    let locationData = await this.readLocation();
    this.selectedCity = selectedCity;
    let districts: string[] = [];
    locationData.forEach((city: any) => {
      if (city.name === selectedCity) {
        city['towns'].forEach((district: any) => {
          districts.push(district.name);
        });
      }
    });
    return districts;
  }

  async getAllNeighbourhoods(selectedDistrict: string) {
    let locationData = await this.readLocation();

    let neighbourhoods: string[] = [];

    locationData.forEach((city: any) => {
      if (city.name === this.selectedCity) {
        city['towns'].forEach((district: any) => {
          if (district.name == selectedDistrict) {
            district.districts.forEach((districts: any) => {
              districts.quarters.forEach((neighbourhood: any) => {
                neighbourhoods.push(neighbourhood.name);
              });
            });
          }
        });
      }
    });
    return neighbourhoods;
  }

  getMessage(): any {
    return this.subject.asObservable();
  }
}

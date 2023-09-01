import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private subject = new Subject();

  changeProfilePageStatus(_status: boolean) {
    this.subject.next({ status: _status });
  }

  getMessage():any {
    return this.subject.asObservable();
  }

}
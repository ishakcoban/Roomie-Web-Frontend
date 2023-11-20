import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class UploadService {
  private subject = new Subject();

  constructor(private httpService: HttpService) { }

  changePopupStatus(_status: boolean,_type:string,_target:string) {
    console.log({ status: _status,type:_type,target:_target })
    this.subject.next({ status: _status,type:_type,target:_target });
  }

  uploadFile(file: File):any /*Observable<HttpEvent<any>>*/ {
    const formData = new FormData();
    formData.append('file', file);

    /*const req = new HttpRequest('POST', '/upload', formData, {
      reportProgress: true
    });*/

    return /*this.http.request(req)*/"";
  }
}
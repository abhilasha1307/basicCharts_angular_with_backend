import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AjaxLine1Service {


  constructor(private http: HttpClient) {
  }

  getAll_2(): Observable<any>
  {
    return this.http.get<any>('http://127.0.0.1:8080/getajax1');
  }

}

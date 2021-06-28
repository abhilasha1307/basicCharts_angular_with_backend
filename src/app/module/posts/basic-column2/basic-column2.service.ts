import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class basicCol2Service {


  constructor(private http: HttpClient) {
  }

  getAll_2(): Observable<any>
  {
    return this.http.get<any>('http://127.0.0.1:5000/activecases');
  }

}

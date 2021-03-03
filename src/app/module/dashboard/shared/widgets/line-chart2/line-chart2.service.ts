import { Series } from './lineChart2';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LineChart2Service {




  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Series> {
    return this.http.get<Series>('http://127.0.0.1:8080/getchartdata');
  }
}

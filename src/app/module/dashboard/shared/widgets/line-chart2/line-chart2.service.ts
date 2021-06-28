import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Linechart2Service {


  constructor(private http: HttpClient) {
  }

  getAll_1(): Observable<Object>
  {
    return this.http.get<Object>('http://127.0.0.1:5000/recoveryoutcome');
  }

}

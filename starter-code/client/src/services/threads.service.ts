import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// zimport {Observable} from 'rxjs/Rx';

@Injectable()
export class ThreadsServices {
  BASEURL = 'http://localhost:3000';
  constructor(private http: Http) {}
  getList() {
    return this.http.get(`${this.BASEURL}/api/threads`)
      .map((res) => res.json());
  }
}

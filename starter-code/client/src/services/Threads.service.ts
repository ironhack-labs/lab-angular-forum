import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';

@Injectable()
export class ThreadsService {
  BASE_URL:string = environment.baseURL;

  constructor (private http: Http) { }

  getThreads() {
     return this.http.get(`${this.BASE_URL}/api/threads`)
       .map((res) => res.json());
   }

}

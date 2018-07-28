import { Injectable } from '../../node_modules/@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';


const BASEURL = environment.BASEURL;

@Injectable()


export class AllthreadsService {


  constructor(public http: Http) {}

  getThreads() {
   return this.http.get(`${BASEURL}/api/threads`).map(res => {
     const threads = res.json();
     console.log(threads);
     return threads;
   });
  }
}


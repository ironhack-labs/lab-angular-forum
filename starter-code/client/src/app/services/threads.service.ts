import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Http} from '@angular/http';
import {environment} from '../../environments/environment'
const BASEURL = environment.BASEURL + "/api";

@Injectable()
export class ThreadsService {



constructor(private http:Http) { }

  showThreads(){
    return this.http.get(`${BASEURL}/threads`)
    .map(res => res.json())

  }

}

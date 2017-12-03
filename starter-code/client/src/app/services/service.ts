import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";

const PATH = "/api/threads";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class ForumService {
  constructor(private http: Http) {}

  getAllThreads():Observable<any>{
      return this.http.get(BASEURL)
                      .map(res => res.json());
  }

  // getEntryByID(id):Observable<any>{
  //     return this.http.get(`${BASEURL}/${id}`)
  //                     .map(res => res.json());
  // }



}

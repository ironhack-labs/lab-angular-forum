import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from '../../environments/environment';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor(private http: Http) { }


  getThreads() {
    return this.http.get(`${environment.BASE_URL}/api/threads`).pipe(
      map( (res:Response) => {
        return res.json()
      })
    )
  }

  getThreadById(id: string) {
    return this.http.get(`${environment.BASE_URL}/api/threads/${id}`).pipe(
      map( (res:Response) => {
        return res.json()
      })
    )
  }
}

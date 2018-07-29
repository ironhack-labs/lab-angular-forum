import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { Thread } from '../interfaces/Tread';
import { environment } from '../environments/environment';
import { map, catchError } from 'rxjs/operators';

const {BASEURL} = environment;
@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  options: object = {withCredentials: true};
  enableNewThreadForm: boolean = false;
  showThreadList: boolean = true;
  showOneThread: boolean = true;
  
  constructor(private http: Http) { }

  errorHandler(e){
    console.log("ThreadsServiceError");
    console.log(e.getMessage());
    console.log(e);
  }

  getThreads(): Observable<Array<Thread>>{
    return this.http.get(`${BASEURL}/api/threads`).pipe(
      map((res: Response) => {
        return res.json();
      }),
      catchError(e=>of(this.errorHandler(e)))
    )
  }

  sendThread(newThread): Observable<any>{
    return this.http.post(`${BASEURL}/api/threads`, newThread, this.options).pipe();
  }

  getSingleThread(id: string): Observable<Thread>{
    return this.http.get(`${BASEURL}/api/threads/${id}`).pipe(
      map((res: Response) => {
        return res.json();
      })
    )
  }
}

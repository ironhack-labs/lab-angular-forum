import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from '../../environments/environment';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThreadsService {
  options: object = {
    withCredentials: true
  }

  constructor(private http: Http) { }


  getThreads() {
    return this.http.get(`${environment.BASE_URL}/api/threads`).pipe(
      map( (res: Response) => {
        return res.json()
      })
    )
  }

  getThreadById(id: string) {
    return this.http.get(`${environment.BASE_URL}/api/threads/${id}`).pipe(
      map( (res: Response) => {
        return res.json()
      })
    )
  }

  newThread(title: string, content: string) {
    let postInfo = {
      title,
      content
    }
    return this.http.post(`${environment.BASE_URL}/api/threads`, postInfo, this.options).pipe(
      map( (res: Response) => {

      })
    )
  }

  newReply(threadId: any, content: string) {
    let postInfo = {
      content
    }
    return this.http.post(`${environment.BASE_URL}/api/threads/${threadId}/replies`, postInfo, this.options).pipe(
      map( (res: Response) => {
        return res.json()
      })
    )
  }
}

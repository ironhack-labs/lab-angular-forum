import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from 'rxjs/operators';
import { Observable } from "rxjs";
import { of } from 'rxjs';

interface user {
    username: string
}

@Injectable()
export class ThreadsService {
    
    options: object = {
        withCredentials: true
      }
       constructor(private http: Http) { }
       getAllThreads() {
        return this.http.get(`http://localhost:3000/api/threads`).pipe(
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
        return this.http.post(`http://localhost:3000/api/threads`, postInfo, this.options).pipe(
          map( (res: Response) => {
           })
        )
      }
    }
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ThreadsService {
    
    BASE_URL: string = 'http://localhost:3000/api';
    options:object = {withCredentials:true};
    constructor(private http: Http, private router: Router) { }

    getThreads() {
        return this.http.get(`${this.BASE_URL}/threads`)
            .map((res) => res.json());
    }
    addThreads(newThreads){
        return this.http.post(`${this.BASE_URL}/threads`,newThreads,this.options)
            .map((res)=> res.json ());     
    }
    getThread(id) {
        return this.http.get(`${this.BASE_URL}/threads/${id}`)
          .map((res) => res.json());
      }
    
}
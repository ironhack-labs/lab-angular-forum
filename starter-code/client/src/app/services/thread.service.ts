import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class ThreadService {
    BASEURL: string = "http://localhost:3000"
    options: object = { withCredentials: true };

    constructor(private http: Http) { }

    getThreads() {
        return this.http.get(`${this.BASEURL}/api/threads`)
            .map((res) => res.json());
    }

    addThread(data){
        return this.http.post(`${this.BASEURL}/api/threads`, data, this.options)
            .map(res => res.json())
    }

    getThreadFromDb(id) {
        return this.http.get(`${this.BASEURL}/api/threads/${id}`)
            .map((res) => res.json());
    }

    addReply(data){
        console.log(data._id)
        return this.http.post(`${this.BASEURL}/api/threads/${data.threadId}/replies`, data, this.options)
            .map((res) => {
                res.json()
            });
    }
}
import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import { environment } from "../environments/environment";
import { map } from "../../node_modules/rxjs/operators";
const {BASEURL} = environment;

@Injectable()
export class ThreadsService {
    threads:any=[]
    options:object = {withCredentials:true};
    constructor(public http:Http){

    }

    getThreads():any{

        return this.http.get(`${BASEURL}/api/threads`,this.options).pipe(
            map((res:Response)=>{
                this.threads=res.json()
                return this.threads
            })
        )
    }

    addThread(title:string,content:string){
        return this.http.post(`${BASEURL}/api/threads`,{title,content},this.options).pipe(
            map((res:Response)=>{
                this.threads=res.json()
                return this.threads
            })
        )
    }

    getThread(id){
        return this.http.get(`${BASEURL}/api/threads/${id}`,this.options).pipe(
            map((res:Response)=>{
                var thread=res.json()
                return thread
            })
        )
    }

    newReply(content,threadId){
        return this.http.post(`${BASEURL}/api/threads/${threadId}/replies`,{content},this.options).pipe(
            map((res:Response)=>{
                var thread=res.json()
                return thread
            })
        )
    }
}
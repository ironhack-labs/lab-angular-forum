import { Injectable , EventEmitter } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { Thread } from '../models/Thread.model'
import { Reply } from '../models/Reply.model'


@Injectable()
export class ThreadService {

  private baseUrl = `${environment.apiUrl}/api/threads`;
  private headers = new Headers({ 'Contetn-type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private thread : Thread;
  private threadEvent:EventEmitter<any> = new EventEmitter<any>();
  private replies : Array< Reply>;

  constructor(private http : Http) { }

  public getThreadEventEmitter():EventEmitter<any>{
     return this.threadEvent;
   }

  public getThread(){ return this.thread; }

  private emitThreadEvent(thread){
    this.thread = thread;
    this.threadEvent.emit(thread);
    return thread;
  }


    list():Observable<Array<Thread>>{
      console.log("--into ThreadService: List");
      return this.http.get(this.baseUrl,this.options)
        .map( res => res.json())
        .catch (this.handleError);
    }

    addThread(thread):Observable<Thread>{
      return this.http.post(this.baseUrl,thread, this.options)
        .map(res => res.json())
        .catch (this.handleError)
    }

    detail(id):Observable <Thread>{
      console.log(id);
      return this.http.get(`${this.baseUrl}/${id}`,this.options)
        .map(res=>res.json())
        .map(thread => this.emitThreadEvent(thread))
        .catch(this.handleError)
    }

    addReply(content,id):Observable<Thread>{
      console.log(content, id);
      return this.http.post(`${this.baseUrl}/${id}/replies`,{content},this.options)
          .map(res=>res.json())
          .map(thread=>this.thread=thread)
          .catch ( this.handleError)
    }

  protected handleError (error :Response | any ): Observable<any> {
    return Observable.throw (error.json());
  }

}

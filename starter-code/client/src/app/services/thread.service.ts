import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { Thread } from '../models/Thread.model'

@Injectable()
export class ThreadService {

  private baseUrl = `${environment.apiUrl}/api/threads`;
  private headers = new Headers({ 'Contetn-type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  constructor(private http : Http) { }

    list():Observable<Array<Thread>>{
      console.log("--into ThreadService: List");
      return this.http.get(this.baseUrl,this.options)
        .map( res => res.json())
        .catch (this.handleError);
    }


  protected handleError (error :Response | any ): Observable<any> {
    console.log( error );
    return Observable.throw (error.joson());
  }

}

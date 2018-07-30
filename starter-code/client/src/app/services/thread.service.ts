import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
//Nose porque cuando creo los Post no se crean con fechas las he tenido que quitar de la vista para que no lance error, 
//en el modelo si que esta definido el campo fecha
export class ThreadService{
  options: object = {
    withCredentials: true
  }

  constructor(public http: Http){}
  
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
        console.log(res)
      })
    )
  }
}
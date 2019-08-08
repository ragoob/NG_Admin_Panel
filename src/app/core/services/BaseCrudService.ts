import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseCrudService {
protected ApiUrl : string;
  constructor(protected http : HttpClient){
   this.ApiUrl = "";
  }

  get() : Observable<any[]> {
   
    return this.http.get<any[]>(this.ApiUrl)
  }

  getById(id : number) : Observable<any>{
    return this.http.get<any>(`${this.ApiUrl}/${id}`);
  }

  post(request : any) : Observable<any>{
   return this.http.post(this.ApiUrl,request);
  }

  put(request : any) : Observable<any>{
    return this.http.put(this.ApiUrl,request);
   }

   delete(id : number) : Observable<any>{
    return this.http.delete(`${this.ApiUrl}/${id}`);
   }
}
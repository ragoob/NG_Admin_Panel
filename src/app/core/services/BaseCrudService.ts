import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseCrudService {
protected ApiUrl : string;
  constructor(protected http : HttpClient){
   this.ApiUrl = "";
  }

  get() : Observable<any[]> {
   
    return this.http.get<any[]>(this.ApiUrl,{
      headers: new HttpHeaders({
        'Authorization': 'bearer ' + JSON.parse(localStorage.getItem("token")).token
      })
    })
  }

  getById(id : number) : Observable<any>{
    return this.http.get<any>(`${this.ApiUrl}/${id}`,{
      headers: new HttpHeaders({
        'Authorization': 'bearer ' + JSON.parse(localStorage.getItem("token")).token
      })
    });
  }

  post(request : any) : Observable<any>{
   return this.http.post(this.ApiUrl,request,{
    headers: new HttpHeaders({
      'Authorization': 'bearer ' + JSON.parse(localStorage.getItem("token")).token
    })
  });
  }

  put(request : any) : Observable<any>{
    return this.http.put(this.ApiUrl,request,{
      headers: new HttpHeaders({
        'Authorization': 'bearer ' + JSON.parse(localStorage.getItem("token")).token
      })
    });
   }

   delete(id : number) : Observable<any>{
    return this.http.delete(`${this.ApiUrl}/${id}`,{
      headers: new HttpHeaders({
        'Authorization': 'bearer ' + JSON.parse(localStorage.getItem("token")).token
      })
    });
   }
}
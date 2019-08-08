import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseCrudService } from './BaseCrudService';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseCrudService {

  constructor(protected http: HttpClient) { 
    super(http);
    super.ApiUrl = "https://jsonplaceholder.typicode.com/todos";
  }

  get() : Observable<any[]> {
   
    return this.http.get<any[]>(this.ApiUrl)
  }
}

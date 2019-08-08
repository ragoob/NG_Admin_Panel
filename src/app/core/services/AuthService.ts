import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
interface LoginModel{
    userName : string;
    password : string;
}
interface TokenModel{
    email? : string;
    expires? : string;
    fullName? : string;
    membership? : string[];
    photoPath?  : string;
    token? : string;
}
@Injectable()
export class AuthService {
     currentUser :  BehaviorSubject<TokenModel> = new BehaviorSubject({})
    constructor(private http : HttpClient,private router: Router){
      this.currentUser.next(JSON.parse(localStorage.getItem("token")));
      this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(event => {
        this.currentUser.next(JSON.parse(localStorage.getItem("token")));
      });
    }

    login(model : LoginModel) : void {
     this.http.post(`${environment.apiURL}UserAuthentication`,model)
     .subscribe(d=> {
         let result  : TokenModel = d;
        result.photoPath  = environment.fileURL + result.photoPath;
         localStorage.setItem("token",JSON.stringify(result));
         this.currentUser.next(result);
         console.log(this.currentUser.value)
         this.router.navigate(['/']);
         
     })
    }

}
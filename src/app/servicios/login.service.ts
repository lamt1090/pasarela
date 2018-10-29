import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public token: any;
  public url2: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url2 = GLOBAL.url2;
  }

  getlogin(login): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('username',login.username)
                                  .set('userpassword',login.password);
    return this._http.post(this.url2+'?opcion=validarlogin',body,{headers: headers,responseType:'text'});
  }
  
  logout() {
    return localStorage.removeItem('algo');
  }

public isLoggedIn() {
    if("algo" in localStorage){
      return true;
    }else{
      return false;
    }
    /*this.token= JSON.parse(localStorage.getItem("algo"));
    return this.token;*/
      // moment().isBefore(this.getExpiration());
}

isLoggedOut() {
  return this.isLoggedIn();
}

}

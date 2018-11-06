import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class RegimenService {

  public url: string;
  public url2: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
  }

  addregimen(regimen):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_regimen',regimen.nombre);
    return this._http.post(this.url+'insertregimen.php',body,{headers: headers,responseType:'text'});
  }

  getregimen(): Observable<any>{
    return this._http.get(this.url2+'?opcion=regimen');
  }

  getregimenid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idregimen',id);
    return this._http.post(this.url2+'?opcion=getregimenid',body,{headers: headers,responseType:'text'});
  }
}

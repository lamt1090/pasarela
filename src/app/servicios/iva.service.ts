import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class IvaService {

  public url:string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   addiva(iva):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('valor',iva.valor);
    return this._http.post(this.url+'insertiva.php',body,{headers: headers,responseType:'text'});
  }

}

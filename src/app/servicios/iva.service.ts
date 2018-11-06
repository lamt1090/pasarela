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
  public url2: string;
  public url3: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
   }

   addiva(iva):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('valor',iva.valor);
    return this._http.post(this.url+'insertiva.php',body,{headers: headers,responseType:'text'});
  }

  editiva(iva):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_iva',iva.id_iva)
                                  .set('valor',iva.valor);
    return this._http.post(this.url3+'editiva.php',body,{headers: headers,responseType:'text'});
  }

  getiva(): Observable<any>{
    return this._http.get(this.url2+'?opcion=iva');
  }

  getivaid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idiva',id);
    return this._http.post(this.url2+'?opcion=getivaid',body,{headers: headers,responseType:'text'});
    
  }

}

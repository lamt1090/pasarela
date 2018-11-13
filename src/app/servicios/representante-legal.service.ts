import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteLegalService {

  public url2: string;
  public url3: string;
  public url4: string;
  public url5: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
  }

  editrepresentantelegal(replegal):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('creplegal',replegal.cedula)
                                  .set('nrl',replegal.nombre)
                                  .set('ereplegal',replegal.email)
                                  .set('cereplegal',replegal.celular)
                                  .set('telreplegal',replegal.telefono);
    return this._http.post(this.url3+'editrepresentantelegal.php',body,{headers: headers,responseType:'text'});
  }

  getrepresentante(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getrepresentante');
  }

  getrepresentanteid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idreplegal',id);
    return this._http.post(this.url2+'?opcion=getrepresentanteid',body,{headers: headers,responseType:'text'});
  }

  eliminarrepresentante(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idreplegal',id);
    return this._http.post(this.url4+'?opcion=eliminarrepresentante',body,{headers: headers,responseType:'text'});
  }

  existerepresentante(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idreplegal',id);
    return this._http.post(this.url5+'?opcion=existerepresentante',body,{headers: headers,responseType:'text'});
  }
}

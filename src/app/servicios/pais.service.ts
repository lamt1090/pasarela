import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  public url: string;
  public url2: string;
  public url3: string;
  public url4: string;
  public url5: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url= GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
  }

  addpais(pais):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_pais',pais.nombre);
    return this._http.post(this.url+'insertpais.php',body,{headers: headers,responseType:'text'});
  }

  editpais(pais):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_pais',pais.id_pais)
                                  .set('nombre_pais',pais.nombre);
    return this._http.post(this.url3+'editpais.php',body,{headers: headers,responseType:'text'});
  }

  getpaises(): Observable<any>{
    return this._http.get(this.url2+'?opcion=pais');
  }

  getpaisid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idpais',id);
    return this._http.post(this.url2+'?opcion=getpaisid',body,{headers: headers,responseType:'text'});
  }

  eliminarpais(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idpais',id);
    return this._http.post(this.url4+'?opcion=eliminarpais',body,{headers: headers,responseType:'text'});
  }

  existepais(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idpais',id);
    return this._http.post(this.url5+'?opcion=existepais',body,{headers: headers,responseType:'text'});
  }

}

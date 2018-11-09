import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  public url:string;
  public url2: string;
  public url3: string;
  public url4: string;
  public url5: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url= GLOBAL.url;
    this.url2= GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;

  }

  addmoneda(moneda):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_moneda',moneda.nombre);
    return this._http.post(this.url+'insertmoneda.php',body,{headers: headers,responseType:'text'});
  }

  editmoneda(moneda):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_coin',moneda.id_moneda)
                                  .set('nombre_moneda',moneda.nombre);
    return this._http.post(this.url3+'editmoneda.php',body,{headers: headers,responseType:'text'});
  }

  getmoneda(): Observable<any>{
    return this._http.get(this.url2+'?opcion=moneda');
  }

  getmonedaid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idmoneda',id);
    return this._http.post(this.url2+'?opcion=getmonedaid',body,{headers: headers,responseType:'text'});
  }

  eliminarmoneda(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idmoneda',id);
    return this._http.post(this.url4+'?opcion=eliminarmoneda',body,{headers: headers,responseType:'text'});
  }


}

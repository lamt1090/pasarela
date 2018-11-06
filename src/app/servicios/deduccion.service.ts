import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class DeduccionService {

  public url: string;
  public url2: string;
  public url3 : string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url= GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
  }

  adddeduccion(deduccion):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_deduccion',deduccion.nombre).set('valor_deduccion',deduccion.valor);
    return this._http.post(this.url+'insertdeduccion.php',body,{headers: headers,responseType:'text'});
  }

  editdeduccion(deduccion):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('valor_deduccion',deduccion.valor)
                                  .set('name_deduccion',deduccion.nombre)
                                  .set('id_deduccion',deduccion.id_deduccion);
    return this._http.post(this.url3+'editdeduccion.php',body,{headers: headers,responseType:'text'});
  }

  getdeducciones(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getdeduccion');
  }

  getdeduccionid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('iddeduccion',id);
    return this._http.post(this.url2+'?opcion=getiddeduccion',body,{headers: headers,responseType:'text'});
    
  }
}

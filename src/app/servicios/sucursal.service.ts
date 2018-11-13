import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  public url: string;
  public url2: string;
  public url3: string;
  public url4 : string;
  public url5: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
    }

   addsucursal(sucursal):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_sucursal',sucursal.nombre)
                                .set('address',sucursal.dirsucu)
                                .set('selectciudad',sucursal.nciu)
                                .set('selcomercio',sucursal.ncomercio);
    return this._http.post(this.url+'insertsucursal.php',body,{headers: headers,responseType:'text'});
  }

  editsucursal(sucursal):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_sucursal',sucursal.nombre)
                                  .set('address',sucursal.dirsucu)
                                  .set('selectciudad',sucursal.nciu)
                                  .set('selcomercio',sucursal.ncomercio);
    return this._http.post(this.url3+'editvalidarrequisito.php',body,{headers: headers,responseType:'text'});
  }

  getcomercios(): Observable<any>{
    return this._http.get(this.url2+'?opcion=comercio');
  }

  getpais(): Observable<any>{
    return this._http.get(this.url2+'?opcion=pais');
  }

  getpaisopcional(sp): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_pais',sp);
    return this._http.post(this.url2+'?opcion=paisopcional',body,{headers: headers,responseType:'text'});
    
  }

  getciudadopcional(scd): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_departamento',scd);
    return this._http.post(this.url2+'?opcion=ciudadopcional',body,{headers: headers,responseType:'text'});
    
  }


}

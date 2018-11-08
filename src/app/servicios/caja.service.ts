import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  public url: string;
  public url2: string;
  public url3: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
  }

  addcaja(caja):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('ncaja',caja.nombre)
                                .set('selsuc',caja.sucursal)
    return this._http.post(this.url+'insertcaja.php',body,{headers: headers,responseType:'text'});
  }

  editcaja(caja):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idcaja',caja.id_caja)
                                .set('id_categoria',caja.id_sucursal)
                                .set('selsuc',caja.nombre);
    return this._http.post(this.url3+'editcaja.php',body,{headers: headers,responseType:'text'});
  }

  getcomercios(): Observable<any>{
    return this._http.get(this.url2+'?opcion=comercio');
  }

  getsucursales(scm): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_comercio',scm);
    return this._http.post(this.url2+'?opcion=sucursalopcional',body,{headers: headers,responseType:'text'});
    
  }

  getcajas(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getcaja');
  }

  getcajaid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idcaja',id);
    return this._http.post(this.url2+'?opcion=getcajaid',body,{headers: headers,responseType:'text'});
  }

}

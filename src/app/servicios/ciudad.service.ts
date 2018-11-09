import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  public url: string;
  public url2: string;
  public url3: string;
  public url4: string;
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

  addciudad(ciudad):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_departamento',ciudad.dep).set('name_ciudad',ciudad.nombre);
    return this._http.post(this.url+'insertciudad.php',body,{headers: headers,responseType:'text'});
  }

  editciudad(ciudad):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_ciudad',ciudad.id_ciudad)
                                .set('id_departamento',ciudad.id_departamento)
                                .set('name_ciudad',ciudad.nombre);
    return this._http.post(this.url3+'editciudad.php',body,{headers: headers,responseType:'text'});
  }

  getdepartamentos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=departamento');
  }

  getciudades(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getciudad');
  }

  getciudadid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idciudad',id);
    return this._http.post(this.url2+'?opcion=getciudadid',body,{headers: headers,responseType:'text'});
  }

  eliminarciudad(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idciudad',id);
    return this._http.post(this.url4+'?opcion=eliminarciudad',body,{headers: headers,responseType:'text'});
  }

  existeciudad(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idciudad',id);
    return this._http.post(this.url5+'?opcion=existeciudad',body,{headers: headers,responseType:'text'});
  }
}

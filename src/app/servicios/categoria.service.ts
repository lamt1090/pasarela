import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

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

  addcategoria(categoria):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_categoria',categoria.nombre);
    return this._http.post(this.url+'insertcategoria.php',body,{headers: headers,responseType:'text'});
  }

  editcategoria(categoria):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_categoria',categoria.nombre)
                                  .set('id_categoria',categoria.id_categoria);
    return this._http.post(this.url3+'editcategoria.php',body,{headers: headers,responseType:'text'});
  }

  getcategorias(): Observable<any>{
    return this._http.get(this.url2+'?opcion=categoria');
  }

  getcategoriaid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_categoria',id);
    return this._http.post(this.url2+'?opcion=getcategoria',body,{headers: headers,responseType:'text'});
  }

  eliminarcategoria(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_categoria',id);
    return this._http.post(this.url4+'?opcion=eliminarcategoria',body,{headers: headers,responseType:'text'});
  }

  existecategoria(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_categoria',id);
    return this._http.post(this.url5+'?opcion=existecategoria',body,{headers: headers,responseType:'text'});
  }

}



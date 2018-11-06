import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

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

   addsubcategoria(subcategoria):Observable<any>{
   let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
   const body = new HttpParams().set('id_categoria',subcategoria.categoria).set('name_subcategoria',subcategoria.nombre);
   return this._http.post(this.url+'insertsubcategoria.php',body,{headers: headers,responseType:'text'});
  }

  editsubcategoria(subcateg):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_subcategoria',subcateg.id)
                                .set('id_categoria',subcateg.idcate)
                                .set('name_subcategoria',subcateg.nombre);
    return this._http.post(this.url3+'editsubcategoria.php',body,{headers: headers,responseType:'text'});
  }

  getcategorias(): Observable<any>{
    return this._http.get(this.url2+'?opcion=subcategoria');
  }

}

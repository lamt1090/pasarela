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

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   addsubcategoria(subcategoria):Observable<any>{
    console.log(subcategoria);
   let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
   const body = new HttpParams().set('id_categoria',subcategoria.categoria).set('name_subcategoria',subcategoria.nombre);
   return this._http.post(this.url+'insertsubcategoria.php',body,{headers: headers,responseType:'text'});
 }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  public url: string; //url para insertar
  public url2: string; //url para hacer consultas y traer datos
  public url3: string; //url para editar registros
  public url4 : string; //url para eliminar registros
  public url5: string; //url para saber si se puede eliminar un registro, es decir si no es foranea en otra tabla

  constructor(
    public _http: HttpClient
  ) { 
    //se asina a cada url la ruta que viene de el servicio global.ts
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
    }

  //metodo para insertar una subcategoria
   addsubcategoria(subcategoria):Observable<any>{
   let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
   const body = new HttpParams().set('id_categoria',subcategoria.categoria).set('name_subcategoria',subcategoria.nombre);
   return this._http.post(this.url+'insertsubcategoria.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar una subcategoria 
  editsubcategoria(subcateg):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_subcategoria',subcateg.id_sub_cat)
                                .set('id_categoria',subcateg.id_categoria)
                                .set('name_subcategoria',subcateg.nombre);
    return this._http.post(this.url3+'editsubcategoria.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener las categorias
  getcategorias(): Observable<any>{
    return this._http.get(this.url2+'?opcion=subcategoria');
  }

  //metodo para obtener las subcategorias
  getsubcategorias(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getsubcategorias');
  }

  //metodo para obtener una subcategoria especifica
  getsubcategoriaid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idsubcat',id);
    return this._http.post(this.url2+'?opcion=getsubcategoriaid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar una subcategoria
  eliminarsubcategoria(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idsubcat',id);
    return this._http.post(this.url4+'?opcion=eliminarsubcategoria',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si la subcategoria a eliminar ya esta asignada
  existesubcategoria(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idsubcat',id);
    return this._http.post(this.url5+'?opcion=existesubcategoria',body,{headers: headers,responseType:'text'});
  }

}

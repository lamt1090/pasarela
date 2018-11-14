import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarsucursalService {

  public editsucu: any[]; //variable para guardar una consulta de la base de datos echa desde el servicio sucursal
  public edit: any[]; //variable para guardar una consulta de la base de datos echa desde mostrarsucursal
  constructor() { }

  //metodo para guardar los datos
  set(data){
    this.edit= data;
  }

  //metodo para obtener los datos
  get(){
    return this.edit;
  }

  //metodo para guardar los datos
  setsucu(data){
    this.editsucu= data;
  }

  //metodo para obtener los datos
  getsucu(){
    return this.editsucu;
  }
}

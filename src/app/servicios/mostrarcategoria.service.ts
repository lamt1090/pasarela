import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarcategoriaService {
  public editct: any[]; //variable para guardar una consulta de la base de datos
  constructor() { }

  //metodo para guardar los datos
  set(data){
    this.editct= data;
  }

  //metodo para obtener los datos
  get(){
    return this.editct;
  }
}

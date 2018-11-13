import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarsubcategoriaService {
  public editsubcat: any[];
  constructor() { }

  set(data){
    this.editsubcat= data;
  }

  get(){
    return this.editsubcat;
  }
}

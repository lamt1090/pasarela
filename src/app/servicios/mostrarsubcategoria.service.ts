import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarsubcategoriaService {
  public editsubcat: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editsubcat= data;
    console.log("lo recibi y lo guarde:="+this.editsubcat);
  }

  get(){
    return this.editsubcat;
  }
}

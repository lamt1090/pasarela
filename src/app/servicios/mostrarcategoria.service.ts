import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarcategoriaService {
  public editct: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editct= data;
    console.log("lo recibi y lo guarde:="+this.editct);
  }

  get(){
    return this.editct;
  }
}

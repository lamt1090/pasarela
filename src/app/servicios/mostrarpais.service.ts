import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarpaisService {
  public editpais: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editpais= data;
    console.log("lo recibi y lo guarde:="+this.editpais);
  }

  get(){
    return this.editpais;
  }
}

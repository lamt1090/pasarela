import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarrolesService {
  public editrol: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editrol= data;
    console.log("lo recibi y lo guarde:="+this.editrol);
  }

  get(){
    return this.editrol;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarcomercioService {
  public editcomercio: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editcomercio= data;
    console.log("lo recibi y lo guarde:="+this.editcomercio);
  }

  get(){
    return this.editcomercio;
  }
}

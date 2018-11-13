import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarivaService {
  public editiva: any[];
  constructor() { }

  set(data){
    this.editiva= data;
  }

  get(){
    return this.editiva;
  }
}

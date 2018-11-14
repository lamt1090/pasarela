import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SucursalModule { 
  constructor(
    //campos utilizados en el formulario html y declarados en el componente
    public nombre: String,
    public direccion: String,
    public ciudad: String,
    public comercio: String,
    public npais: String,
    public ndep: String,
    public nciu: String,
    public dirsucu: String,
    public ncomercio: String,
  ){}
}

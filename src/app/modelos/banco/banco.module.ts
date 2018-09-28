import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancoComponent } from '../../componentes/banco/banco.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BancoComponent
  ]
})
export class BancoModule { }

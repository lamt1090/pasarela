import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LoginModule { 
  constructor(
    public username: String,
    public password : string
  ){}
}

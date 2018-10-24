import { Component, OnInit } from '@angular/core';
import { TipoCuentaModule } from '../../modelos/tipo-cuenta/tipo-cuenta.module';
import { TipoCuentaService } from '../../servicios/tipo-cuenta.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tipo-cuenta',
  templateUrl: './tipo-cuenta.component.html',
  styleUrls: ['./tipo-cuenta.component.css'],
  providers: [TipoCuentaService]
})
export class TipoCuentaComponent implements OnInit {

  public tipocuenta: TipoCuentaModule;

  constructor(
    private _tipocuentaservice: TipoCuentaService
  ) {
    this.tipocuenta= new TipoCuentaModule("");
   }

  ngOnInit() {
  }

  onsubmit(formtipocuenta: NgForm){
    let vm = this;
    vm._tipocuentaservice.addtipocuenta(vm.tipocuenta)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formtipocuenta.reset();
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { BancoModule } from '../../../modelos/banco/banco.module';
import { BancoService } from '../../../servicios/banco.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MostrarbancoService } from '../../../servicios/mostrarbanco.service';
import { EditarbancoModule } from '../../../modelos/editar/editarbanco/editarbanco.module';


@Component({
  selector: 'app-editarbanco',
  templateUrl: './editarbanco.component.html',
  styleUrls: ['./editarbanco.component.css']
})
export class EditarbancoComponent implements OnInit {

  public banco : BancoModule;
  sidbanco: any[];

  constructor(
    public rt : Router,
    private mostrar: MostrarbancoService,
    private _bancoservice: BancoService,
    public m_editar: EditarbancoModule
  ) { }

  ngOnInit() {
    this.sidbanco=this.mostrar.get();
  }

  onsubmit(){
    let vm = this;

    vm._bancoservice.editbanco(vm.banco)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/banco');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { BancoModule } from '../../modelos/banco/banco.module';
import { BancoService } from '../../servicios/banco.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css'],
  providers: [BancoService]
})
export class BancoComponent implements OnInit {
 
  data: any;
  public banco : BancoModule; //objeto de conexión con el modelo

  constructor(
    private _bancoservice: BancoService // objeto de conexión con el servicio
  ) { 
    this.banco= new BancoModule("");
    
  }

  ngOnInit() {
   
  }

  //metodo para insertar
  onsubmit(formbanco: NgForm){
    let vm = this;

    vm._bancoservice.addbanco(vm.banco)//petición para enviar los datos a insertar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos guardados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        formbanco.reset();//se resetea el formulario
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }


}

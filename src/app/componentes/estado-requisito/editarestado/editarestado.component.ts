import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarestadosrequisitosService } from '../../../servicios/mostrarestadosrequisitos.service';
import { EstadoRequisitoService } from '../../../servicios/estado-requisito.service';

@Component({
  selector: 'app-editarestado',
  templateUrl: './editarestado.component.html',
  styleUrls: ['./editarestado.component.css']
})
export class EditarestadoComponent implements OnInit {

  model:any = {}; //variable para guardar los datos obtenidos del mostrar
 
  constructor(
    public rt : Router,
    private mostrar: MostrarestadosrequisitosService,//objeto de conexión al mostrar
    private _estadoservice: EstadoRequisitoService//objeto de conexón al servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se extraen los datos del mostrar
    this.model=sidata[0];//se guardan los datos obtenidos
  }

  //metodo para eliminar
  onsubmit(f:NgForm){
    let vm = this;
    vm._estadoservice.editestadorequisito(vm.model)//petición al servicio para enviar los datos a modificar
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/estadorequisito');//se redirecciona a otra vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar el editar
  cancelar(formeditarestado:NgForm){
    formeditarestado.reset();//se resetea el formulario
      this.rt.navigateByUrl('/estadorequisito');//se redirecciona a otra vista
  }

}

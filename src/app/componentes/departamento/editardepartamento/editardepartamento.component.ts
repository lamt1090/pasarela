import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrardepartamentoService } from '../../../servicios/mostrardepartamento.service';
import { DepartamentoService } from '../../../servicios/departamento.service';

@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit {

  model:any = {};//varable para guardar los datos del mostrar
  sdepartamento: any[]; //variable para guardar los paises traidos de la BD
  data: any;

  constructor(
    public rt : Router,
    private mostrar: MostrardepartamentoService,//objeto de conexión con el msotrar
    private _departamentoservice: DepartamentoService//objeto de conexión con el servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se extraen los datos del mostrar
    this.model=sidata[0];//se guardan los datos obtenidos
    this.paises();//se inicaializa el metodo
  }

  //metodo para editar 
  onsubmit(f:NgForm){
    let vm = this;
    vm._departamentoservice.editdepartamento(vm.model)//petició al servicio para enviar los datos a editar
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/departamento');//se redirecciona a otra vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar el editar
  cancelar(formeditardepartamento:NgForm){
    formeditardepartamento.reset();//se resetea el formulñario
      this.rt.navigateByUrl('/departamento');//se redirecciona a otra vista
  }

  //metodo para traer los paises de la BD
  paises(){
    let cate=this;
    cate._departamentoservice.getpaises()//petición al servicio para obtener los datos 
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sdepartamento=result;//se guardan los datos obtenidos
            }
          }else{
              cate = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

}

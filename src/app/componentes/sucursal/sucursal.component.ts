import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SucursalModule } from '../../modelos/sucursal/sucursal.module';
import { SucursalService } from '../../servicios/sucursal.service';
import { Router } from '@angular/router';
import { MostrarsucursalService } from '../../servicios/mostrarsucursal.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css'],
  providers: [SucursalService]
})
export class SucursalComponent implements OnInit {
  scomercio: any[]; //variable para guardar comercios
  sciudad: any[]; //variable para guardar las ciudades
  spais: any[]; //variable para guardar los paises
  sdepartamento: any[]; //variable para guardar los departamentos
  sc: any; //variable para guardar las eleciones del formularios
  sp: any; //variable para guardar las eleciones del formularios
  scd: any; //variable para guardar las eleciones del formularios
  cm: any; //variable para guardar las eleciones del formularios
  sucursalid: any[]; //variable para guardar el comercio a mostrar
  data: any[];
  public sucursal: SucursalModule;

  constructor(
    private rt: Router,
    private _msucuservice: MostrarsucursalService, //objeto para acceder al servicio mostrar
    private _sucursalservice: SucursalService //objeto para acceder al servicio
  ) {
    
    this.sucursal = new SucursalModule("","","","","","","","","");
   }

  ngOnInit() {
    this.comercios();//inicialización metodo para obtener los comercios
    this.pais(); //inicialización metodo para obtener paises
  }

  onsubmit(formsucursal: NgForm){
    let vm = this;
    vm._sucursalservice.addsucursal(vm.sucursal)//petición al servicio para ir al metodo insertar
    .subscribe(
      res => {
        if(res == true){
          swal({
            type: 'success',
            title: 'Datos guardados correctamente',
            /*text: '',
            footer: '<a href>Why do I have this issue?</a>'*/
          })
        formsucursal.reset();
        }else{
          alert("error al insertar");
        }
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

  comercios(){
    let cate=this;
    cate._sucursalservice.getcomercios()//petición al servicio para ir al metodo de obtener los comercios
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay comercios disponibles',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.scomercio=result;// se guardan los comercios en la variable 
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

  pais(){
    let sc=this;
    sc._sucursalservice.getpais()//petición al servicio para ir al metodo y obtener los paises
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay paises disponibles',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.spais=this.data;//se guardan los paises 
            }
          }else{
              sc = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo pasa saber la elección del país
  onSelectionpais(){
    this.sp= this.sucursal.npais;
    if(this.sp!=0){
      this.sd(this.sp);//se llama al metodo para budcar los departamentos de ese país
    }else{
      alert("Error al elegir el país");
    }
  }

  sd(sp){
    let pais=this;
    pais._sucursalservice.getpaisopcional(sp)//petición al servicio para ir al metodo de buscar los departamentos
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay departamentos para esta opción',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.sdepartamento=this.data;// se guardab los departamentos obtenidos 
            }
          }else{
              pais = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }
  
  //metodo para saber la eleción del departamnento
  onSelectiondepartamento(){
    this.scd= this.sucursal.ndep;
    if(this.scd!=0){
      this.scity(this.scd);//se llama al metodo para buscar las cuidades de la elección
    }else{
      alert("Error al elegir el departamento");
    }
  }

  scity(scd){
    
    let dpto=this;
    dpto._sucursalservice.getciudadopcional(scd)//petición al servicio para ir al metodo y obtener las ciudades 
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay ciudades disponibles para esta opción',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.sciudad=this.data;//se guardan las ciudades obtenidas
            }
          }else{
              dpto = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo para saber la elección de comercio
  onselectioncomercio(formopcionsucursal: NgForm){
    this.cm= this.sucursal.ncomercio;
    if(this.cm!=0){
      this.opcioncomercio(this.cm);//llamado al metodo para obtener el comercio
    }else{
      alert("Error al elegir el comercio");
    }
  }

  opcioncomercio(cm){
    let scm=this;
    scm._sucursalservice.getcomercioopcional(cm)//petición al servicio para ir al metodo y obtener las sucursales de la opción
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay sucursales para este comercio',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.sucursalid=this.data; //se resibe el resultado
              this._msucuservice.setsucu(this.sucursalid);//se envia para que el servicio y se guarde
              this.rt.navigateByUrl('mostrarsucursal'); //se redirecciona a otra vista
            }
          }else{
              scm = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }
  

}

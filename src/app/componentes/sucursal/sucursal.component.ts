import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SucursalModule } from '../../modelos/sucursal/sucursal.module';
import { SucursalService } from '../../servicios/sucursal.service';


@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css'],
  providers: [SucursalService]
})
export class SucursalComponent implements OnInit {
  scomercio: any[];
  sciudad: any[];
  spais: any[];
  sdepartamento: any[];
  sc: any;
  sp: any;
  scd: any;
  data: any[];
  public sucursal: SucursalModule;

  constructor(
    private _sucursalservice: SucursalService
  ) {
    
    this.sucursal = new SucursalModule("","","","","","","","","");
   }

  ngOnInit() {
    this.comercios();
    this.pais();
  }

  onsubmit(formsucursal: NgForm){
    let vm = this;
    vm._sucursalservice.addsucursal(vm.sucursal)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        //formsucursal.reset();
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

  comercios(){
    let cate=this;
    cate._sucursalservice.getcomercios()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              alert("No hay comercios disponibles")
            }else{
              this.scomercio=result;
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
    sc._sucursalservice.getpais()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.spais=this.data;
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

  onSelectionpais(){
    this.sp= this.sucursal.npais;
    if(this.sp!=0){
      this.sd(this.sp);
    }else{
      alert("Error al elegir el país");
    }
  }

  sd(sp){
    let pais=this;
    pais._sucursalservice.getpaisopcional(sp)
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay departamento para esta opción");
            }else{
              this.sdepartamento=this.data;
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
  
  onSelectiondepartamento(){
    this.scd= this.sucursal.ndep;
    if(this.scd!=0){
      this.scity(this.scd);
    }else{
      alert("Error al elegir el departamento");
    }
  }

  scity(scd){
    
    let dpto=this;
    dpto._sucursalservice.getciudadopcional(scd)
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay ciudades para ese departamento");
            }else{
              this.sciudad=this.data;
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
  

}

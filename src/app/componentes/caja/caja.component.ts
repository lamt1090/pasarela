import { Component, OnInit } from '@angular/core';
import { CajaModule } from '../../modelos/caja/caja.module';
import { CajaService } from '../../servicios/caja.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css'],
  providers: [CajaService]
})
export class CajaComponent implements OnInit {
  scm: any;
  data: any;
  scomercio: any[];
  ssucursal: any[];
  public caja : CajaModule;

  constructor(
    private _cajaservice: CajaService
  ) { 
    this.comercios();
    this.caja = new CajaModule("", "","");
  }

  ngOnInit() {
    
  }

  onsubmit(formcaja: NgForm){
    let vm = this;
    vm._cajaservice.addcaja(vm.caja)
    .subscribe(
      res => {
        alert("Datos registrados correctamente");
        formcaja.reset();
      },
      err =>{
        alert("Error al registrar en la base de datos");
        console.log(err);
      } 
    )
  }

  onSelectioncomercio(){
    this.scm= this.caja.comercio;
    if(this.scm!=0){
      this.ssucusales(this.scm);
    }else{
      alert("Error al elegir el departamento");
    }
  }

  ssucusales(scm){
    let dpto=this;
    dpto._cajaservice.getsucursales(scm)
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay ciudades para esta opción")
            }else{
              this.ssucursal=this.data;
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
  
  comercios(){
    let cate=this;
    cate._cajaservice.getcomercios()
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=result;
            
            if(this.data['status']== false){
              alert("No existen monedas en la base de datos")
            }else{
              this.scomercio=this.data;;
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

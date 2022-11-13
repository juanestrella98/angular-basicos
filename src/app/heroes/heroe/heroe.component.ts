import { Component, enableProdMode } from '@angular/core';

@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html'
})
export class HeroeComponent{
  nombre:string = 'iron man';
  edad:number = 45;


  public get nombreCapitalizado() : string {
    return this.nombre.toUpperCase();
  }


  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(){
    this.nombre = 'spiderman'
  }
  cambiarEdad(){
    this.edad = 25
  }
}

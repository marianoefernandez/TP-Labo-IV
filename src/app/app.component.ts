/*
1- (app.component.html) Realizar:
una aplicacion que se le ingresen dos edades en dos cuadro de textos
edadUno, EdadDos
mostrar el promedio y la suma en dos cuadros de textos nuevos
botones "calcular" y "limpiar cuadros de textos"
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Suma } from './Entidades/suma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
export class AppComponent 
{
  title = 'Login';
  miTipo = "text";
  miSuma:Suma;

  constructor()
  {
    this.miSuma = new Suma();
  }

  MostrarAlert()
  {
    alert(this.title);
  }

  CambiarTitulo()
  {
    this.title = "Nuevo titulo"
  }
}
*/

export class AppComponent 
{
  edadUno:string = "";
  edadDos:string = "";
  promedio:string = "";

  constructor(private router:Router){}


  CalcularPromedio()
  {
    let edadUno;
    let edadDos;

    edadUno = parseInt(this.edadUno);
    edadDos = parseInt(this.edadDos);

    isNaN(edadUno) && isNaN (edadDos) ? this.promedio ="Ingreso valores incorrectos. Ingrese sólo números" : this.promedio = ((edadUno + edadDos) / 2).toString();
  }

  Rutear(ruteo:string)
  {
    this.router.navigate([ruteo]);
  }

  Limpiar()
  {
    this.edadUno = "";
    this.edadDos = "";
    this.promedio = "";
    this.Rutear("");
  }
}
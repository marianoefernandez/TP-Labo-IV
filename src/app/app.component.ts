/*
1- (app.component.html) Realizar:
una aplicacion que se le ingresen dos edades en dos cuadro de textos
edadUno, EdadDos
mostrar el promedio y la suma en dos cuadros de textos nuevos
botones "calcular" y "limpiar cuadros de textos"
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{

  constructor(private router:Router)
  {

  }

  Rutear(ruteo:string)
  {
    this.router.navigate([ruteo]);
  }

  SeLogueo()
  {
    return this.RetornarElementoActual("Usuario") != null ? 1 : 0; 
  }

  Redirigir()
  {
    if(this.SeLogueo())
    {
      this.Rutear("home");
    }
    else
    {
      this.Rutear("login");
    }
  }

  RetornarElementoActual(nombreObjeto:string) 
  {
      return JSON.parse(localStorage.getItem(nombreObjeto)!) || null;
  }


}
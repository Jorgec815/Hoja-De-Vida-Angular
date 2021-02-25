import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public datos:any = {nombre: {titulo: "Nombres y Apellidos:", dato: "Jorge Armando Cortés Martínez"},
                      codigo:{titulo: "Código:", dato: "20171020107"},
                      contacto:{titulo: "Contacto:", dato: "3112209282 - jorgec815@gmail.com"},
                      pasatiempos: {titulo: "Pasatiempos:", dato: "Videjuegos, Programación, lectura"}}

  
  
  public tituloTarjeta1: string = 'Datos Personales'
  title = 'HojaDeVida';
}

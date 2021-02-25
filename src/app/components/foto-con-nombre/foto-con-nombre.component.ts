import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto-con-nombre',
  templateUrl: './foto-con-nombre.component.html',
  styleUrls: ['./foto-con-nombre.component.css']
})
export class FotoConNombreComponent implements OnInit {

  public nombre: string ='Jorge Cortés'
  public codigo: number = 20171020107;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../cargar-scripts.service';
import { Planta } from '../models/planta';
@Component({
  selector: 'app-mis-plantas',
  templateUrl: './mis-plantas.component.html',
  styleUrls: ['./mis-plantas.component.css']
})
export class MisPlantasComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptsService) {
    _CargaScripts.Carga(["añadir"])
  }

  ngOnInit(): void {
  }

  PlantaArray: Planta[] = [

  ]

  SelectedPlanta: Planta = new Planta();

  Add() {
    //Agregar Un nuevo usuario
    if (this.SelectedPlanta.ID === 0) {
      this.SelectedPlanta.ID = this.PlantaArray.length + 1;
      this.PlantaArray.push(this.SelectedPlanta);
      this.AgregarEnLocal(this.PlantaArray);

    }
    //Modificar un usuario
    this.SelectedPlanta = new Planta();
    this.AgregarEnLocal(this.PlantaArray);
  }


  openForEdit(Planta: Planta) {
    this.SelectedPlanta = Planta;
  }

  Borrar() {
    if (confirm("¿Quieres borrar la planta seleccionada?")) {
      this.PlantaArray = this.PlantaArray.filter(x => x != this.SelectedPlanta);
      this.SelectedPlanta = new Planta;
    }
  }
  AgregarEnLocal(PlantaList: any) {
    localStorage.setItem('PlantaArray', JSON.stringify(PlantaList));
  }

  Cargar() {
    var storedlist = localStorage.getItem('PlantaArray');
    if (storedlist == null) {

    } else {
      this.PlantaArray = JSON.parse(storedlist);
    }
    return this.PlantaArray;
  }
}

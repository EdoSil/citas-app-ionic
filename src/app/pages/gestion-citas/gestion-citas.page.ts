import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importación correcta de Ionic
import { IonicModule } from '@ionic/angular';

import { Citas } from 'src/app/services/citas';
import { Cita } from 'src/app/models/cita.model';
import { TarjetaCitaComponent } from 'src/app/components/tarjeta-cita/tarjeta-cita.component';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaCitaComponent
  ],
})
export class GestionCitasPage {

  // Arreglo para almacenar las citas
  citas: Cita[] = [];
  nuevaCita: Cita = { texto: '', autor: '' };

  // Inyección del servicio de citas
  constructor(private citasService: Citas) {}

  // Se ejecuta cada vez que se entra a la vista
  async ionViewWillEnter() {
    await this.citasService.cargarCitas();
    this.citas = this.citasService.obtenerTodas();
  }

  // Método para agregar una nueva cita
  async agregarCita() {
    if (
      this.nuevaCita.texto.length >= 5 &&
      this.nuevaCita.autor.length >= 2
    ) {
      await this.citasService.agregar({ ...this.nuevaCita });
      this.nuevaCita = { texto: '', autor: '' };
      this.citas = this.citasService.obtenerTodas();
    }
  }

  // Método para eliminar una cita por su ID (SQLite)
  async eliminarCita(cita: Cita) {
    if (cita.id) {
      await this.citasService.eliminar(cita.id);
      this.citas = this.citasService.obtenerTodas();
      console.log('Cita eliminada con ID:', cita.id);
    }
  }
}

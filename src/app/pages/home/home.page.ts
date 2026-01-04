import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importaciones de Ionic
import { IonicModule } from '@ionic/angular';

import { TarjetaCitaComponent } from 'src/app/components/tarjeta-cita/tarjeta-cita.component';
import { Cita } from 'src/app/models/cita.model';
import { Citas } from 'src/app/services/citas';
import { ConfiguracionesService } from 'src/app/services/configuraciones';

// Componente HomePage que muestra la cita del día
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    TarjetaCitaComponent
  ],
  templateUrl: './home.page.html',
})
export class HomePage {

  // Cita actual (puede ser null si no hay citas)
  citaActual: Cita | null = null;

  // Indica si se permite cambiar la cita en el inicio
  permitirCambiarCita: boolean = true;

  constructor(
    private citasService: Citas,
    private configuracionesService: ConfiguracionesService
  ) {}

  // Se ejecuta cada vez que se entra a la vista
  async ionViewWillEnter() {
    // Cargar citas (SQLite o mock según plataforma)
    await this.citasService.cargarCitas();

    // Obtener una cita aleatoria si existe
    this.citaActual = this.citasService.obtenerAleatoria();

    // Cargar configuración
    this.permitirCambiarCita =
      this.configuracionesService.permitirCambiarCitaInicio();
  }

  // Cambia la cita mostrada (NO elimina datos)
  onCambiarCita() {
    this.citaActual = this.citasService.obtenerAleatoria();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importaciones de Ionic (modo correcto)
import { IonicModule } from '@ionic/angular';

import { ConfiguracionesService } from 'src/app/services/configuraciones';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
})
export class ConfiguracionesPage {

  permitirEliminar: boolean = true;

  constructor(private configuracionesService: ConfiguracionesService) {
    this.permitirEliminar = this.configuracionesService.permitirCambiarCitaInicio();
  }

  onCambiarPermiso() {
    this.configuracionesService.setPermitirCambiarCita(this.permitirEliminar);
  }
}

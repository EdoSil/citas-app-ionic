import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const KEY_CAMBIAR_CITA = 'permitir_cambiar_cita_inicio';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionesService {

  // Controla si se puede cambiar la cita en el Home
  private permitirCambiarCita: boolean = true;

  constructor() {}

  // Cargar configuración desde Preferences
  async cargarConfiguracion() {
    const { value } = await Preferences.get({ key: KEY_CAMBIAR_CITA });

    if (value !== null) {
      this.permitirCambiarCita = JSON.parse(value);
    }
  }

  // Guardar configuración
  async setPermitirCambiarCita(valor: boolean) {
    this.permitirCambiarCita = valor;

    await Preferences.set({
      key: KEY_CAMBIAR_CITA,
      value: JSON.stringify(valor),
    });
  }

  // Obtener valor actual
  permitirCambiarCitaInicio(): boolean {
    return this.permitirCambiarCita;
  }
}

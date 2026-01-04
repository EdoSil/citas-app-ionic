import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SQLiteService } from './sqlite.service';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root',
})
export class Citas {

  private citas: Cita[] = [];

  // Citas de respaldo para WEB
  private citasMock: Cita[] = [
    { id: 1, texto: 'La tecnología bien usada mejora la vida.', autor: 'Anónimo' },
    { id: 2, texto: 'Aprender haciendo es aprender de verdad.', autor: 'Confucio' },
  ];

  constructor(private sqliteService: SQLiteService) {}

  async cargarCitas() {
    if (Capacitor.getPlatform() === 'web') {
      this.citas = this.citasMock;
    } else {
      this.citas = await this.sqliteService.obtenerCitas();
    }
  }

  async agregar(cita: Cita) {
    if (Capacitor.getPlatform() === 'web') {
      this.citasMock.push({
        id: Date.now(),
        ...cita,
      });
      this.citas = this.citasMock;
    } else {
      await this.sqliteService.agregarCita(cita.texto, cita.autor);
      await this.cargarCitas();
    }
  }

  async eliminar(id: number) {
    if (Capacitor.getPlatform() === 'web') {
      this.citasMock = this.citasMock.filter(c => c.id !== id);
      this.citas = this.citasMock;
    } else {
      await this.sqliteService.eliminarCita(id);
      await this.cargarCitas();
    }
  }

  obtenerTodas(): Cita[] {
    return this.citas;
  }

  obtenerAleatoria(): Cita | null {
    if (this.citas.length === 0) {
      return null;
    }
    return this.citas[Math.floor(Math.random() * this.citas.length)];
  }
}

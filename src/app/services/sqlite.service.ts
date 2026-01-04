import { Injectable } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection
} from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class SQLiteService {

  private sqlite!: SQLiteConnection;
  private db!: SQLiteDBConnection;

  constructor() {}

  // Inicializa la base de datos SOLO en móvil
  async inicializarBD() {

    //  NO hacer nada en web
    if (Capacitor.getPlatform() === 'web') {
      return;
    }

    this.sqlite = new SQLiteConnection(CapacitorSQLite);

    this.db = await this.sqlite.createConnection(
      'citas_db',
      false,
      'no-encryption',
      1,
      false
    );

    await this.db.open();

    await this.db.execute(`
      CREATE TABLE IF NOT EXISTS citas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        texto TEXT NOT NULL,
        autor TEXT NOT NULL
      );
    `);
  }

  async obtenerCitas() {
    if (Capacitor.getPlatform() === 'web') {
      return [];
    }
    const result = await this.db.query('SELECT * FROM citas');
    return result.values ?? [];
  }

  async agregarCita(texto: string, autor: string) {
    if (Capacitor.getPlatform() === 'web') {
      return;
    }
    await this.db.run(
      'INSERT INTO citas (texto, autor) VALUES (?, ?)',
      [texto, autor]
    );
  }

  async eliminarCita(id: number) {
    if (Capacitor.getPlatform() === 'web') {
      return;
    }
    await this.db.run(
      'DELETE FROM citas WHERE id = ?',
      [id]
    );
  }
}

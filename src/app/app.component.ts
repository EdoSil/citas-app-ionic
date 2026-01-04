import { Component, OnInit } from '@angular/core';

// Importaciones de Ionic
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

// Servicios
import { ConfiguracionesService } from './services/configuraciones';
import { SQLiteService } from './services/sqlite.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  constructor(
    // Servicio de configuraciones (Preferences)
    private configuracionesService: ConfiguracionesService,

    // Servicio de base de datos (SQLite)
    private sqliteService: SQLiteService
  ) {}

  /**
   * Ciclo de vida Angular
   * Se ejecuta UNA VEZ al iniciar la aplicación
   * Aquí se inicializan los sistemas de almacenamiento
   */
  async ngOnInit() {

    // Inicializar preferencias persistentes
    await this.configuracionesService.cargarConfiguracion();

    // Inicializar base de datos SQLite
    await this.sqliteService.inicializarBD();
  }
}


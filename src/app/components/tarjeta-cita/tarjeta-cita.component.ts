// Componente TarjetaCita que muestra la información de una cita
import { Component, Input, Output, EventEmitter } from '@angular/core'; 

// Importaciones necesarias de Angular e Ionic
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Importación del modelo Cita
import { Cita } from '../../models/cita.model';

@Component({
  // Selector del componente tarjeta-cita
  selector: 'app-tarjeta-cita',

  // Indica que el componente es standalone y sus módulos importados
  standalone: true,

  // Módulos necesarios para el funcionamiento del componente
  imports: [
    CommonModule,
    IonicModule
  ],

  // Archivo de estilo del componente
  templateUrl: './tarjeta-cita.component.html',
})
export class TarjetaCitaComponent {

  // Propiedad de entrada que recibe una cita
  @Input() cita!: Cita | null;


  // Propiedad de entrada que indica si se permite eliminar la cita
  @Input() permitirEliminar: boolean = false;
  // Propiedad de entrada para personalizar el texto del botón
  @Input() textoBoton: string = 'Eliminar';
  // Propiedad de entrada para personalizar el color del botón
  @Input() colorBoton: string = 'danger';


  // Evento de salida que se emite cuando se solicita eliminar la cita 
  @Output() eliminar = new EventEmitter<void>();

  // Método que emite el evento de eliminar cuando se llama
  onEliminar() {
    this.eliminar.emit();
  }
}

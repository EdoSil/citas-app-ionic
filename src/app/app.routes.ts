import { Routes } from '@angular/router';

import { GestionCitasPage } from './pages/gestion-citas/gestion-citas.page';
import { ConfiguracionesPage } from './pages/configuraciones/configuraciones.page'; 

//Se define el arreglo de rutas principales de la aplicación
export const routes: Routes = [
  {
    //Ruta raíz que redirige a la página de inicio si no se especifica ninguna ruta
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    //Ruta para la página de inicio
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    //Ruta para la página de gestión de citas
    path: 'gestion-citas',
    loadComponent: () => import('./pages/gestion-citas/gestion-citas.page').then( m => m.GestionCitasPage)
  },
  {
    //Ruta para la página de configuraciones
    path: 'configuraciones',
    loadComponent: () => import('./pages/configuraciones/configuraciones.page').then( m => m.ConfiguracionesPage)
  },
];

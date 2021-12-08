import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';



const routes: Routes = [
  {
    path: 'crear-persona',
    component: CrearPersonaComponent
  },
   {
    path: 'editar-persona',
    component: EditarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "listar-inmuebles",
    component: BuscarInmuebleComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-inmueble',
    component: CrearInmuebleComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-inmueble/:id',
    component: EditarInmuebleComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';


export const routes: Routes = [
{ 
    path: 'inicio', 
    component: InicioComponent 
},
{ 
    path: 'nosotros', 
    component: NosotrosComponent 
},
{ 
    path: 'servicios', 
    component: ServiciosComponent 
},
{ 
    path: 'contacto', 
    component: ContactoComponent 
},

{   path: '', 
    redirectTo: '/inicio', 
    pathMatch: 'full' 
},
];

export const appRoutingProviders = [
  provideRouter(routes)
];


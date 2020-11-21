import { EditarPacientesComponent } from './componentes/editar-pacientes/editar-pacientes.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import {RouterModule, Routes} from '@angular/router';

const app_routes: Routes= [
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: 'editar', component: EditarPacientesComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'login'},
]

export const app_routing = RouterModule.forRoot(app_routes);

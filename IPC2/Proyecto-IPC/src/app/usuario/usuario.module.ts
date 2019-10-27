import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';

//AHORA VAMOS A TENER REDIRECCIONES BIEN SI ES ACA JAJA YO LA CAGUE EN EL MIO 
//ESTAS SON RUTAS HIJAS DE USUARIO
//USUARIO = ESTUDIANTE
//ES LO MISMO PARA ADMIN Y AUX
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: UsuarioComponent, children: [
    { path: 'dashboard', component: DashboardUsuarioComponent},
  ]},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    UsuarioComponent,//tengo que declarar el componente de usaurio :'v
    //hay un clon :'v
    DashboardUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)// y enlazas la ruta :'v
  ]
})
export class UsuarioModule { }

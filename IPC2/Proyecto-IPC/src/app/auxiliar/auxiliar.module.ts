import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuxiliarComponent } from './auxiliar.component';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from '../usuario/usuario.component';
import { DashboardAuxiliarComponent } from './dashboard-auxiliar/dashboard-auxiliar.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: AuxiliarComponent, children: [
    { path: 'dashboard', component: DashboardAuxiliarComponent},
  ]},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AuxiliarComponent,
    DashboardAuxiliarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)// y enlazas la ruta :'v
  ]
})
export class AuxiliarModule { }

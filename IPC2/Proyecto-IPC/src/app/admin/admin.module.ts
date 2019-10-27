import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from '../usuario/usuario.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CursoAdminComponent } from './curso-admin/curso-admin.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { FormcursoAdminComponent } from './formcurso-admin/formcurso-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: AdminComponent, children: [
    { path: 'dashboard', component: DashboardAdminComponent},
    { path: 'curso', component: CursoAdminComponent},//YA SOLO CREAS LA OTRA RUTA
    { path: 'formcurso', component: FormcursoAdminComponent},
  ]},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AdminComponent,
    DashboardAdminComponent,
    CursoAdminComponent,
    FormCursoComponent,
    FormcursoAdminComponent//EL COMPONENTE SE IMPORTA AUTOMATICAMENTE AL MODULO
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),// y enlazas la ruta :'v

    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

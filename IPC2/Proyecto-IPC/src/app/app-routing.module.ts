import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path: 'login', component: IndexComponent},
  //{path: 'usuario', component: UsuarioComponent},//AHORA YA NO VAS HACER REFERENCIA AL USUARIO BUENO SI PERO 
  //DE UNA MANERA DIFERENTE
  {path: 'registro', component: RegistroComponent},
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: 'admincurso', loadChildren: './admincurso/admin.module#AdminModule'},
  { path: 'auxiliar', loadChildren: './auxiliar/auxiliar.module#AuxiliarModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

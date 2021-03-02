import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const routes: Routes = [
  {path: '', component: DetalhesUsuarioComponent},
  {path: 'novo', component: NovoUsuarioComponent},
  {path: 'editar/:id', component: NovoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class UsuarioRoutingModule { }

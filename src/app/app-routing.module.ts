import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RotasComponent} from "./pages/rotas/rotas.component";
import {TarefasComponent} from "./pages/tarefas/tarefas.component";

const routes: Routes = [
  {path: '', redirectTo: 'rotas', pathMatch: 'full'},
  {path: 'rotas', children: [
      {path: '', component: RotasComponent},
      {path: 'tarefas', component: TarefasComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

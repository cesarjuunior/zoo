// @ts-ignore
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {AnimaisComponent} from './animais/animais.component';
import {AlimentoComponent} from './alimento/alimento.component';
import {ConsultasComponent} from './consultas/consultas.component';
import {FuncionariosComponent} from './funcionarios/funcionarios.component';
import {CreateAnimalComponent} from './animais/create/create-animal.component';
import {ListAnimalComponent} from './animais/list/list-animal.component';
import {DeleteAnimalComponent} from './animais/delete/delete-animal.component';
import {EditAnimalComponent} from './animais/edit/edit-animal.component';
import {CreateAlimentoComponent} from './alimento/create/create-alimento.component';
import {ListAlimentoComponent} from './alimento/list/list-alimento.component';
import {DeleteAlimentoComponent} from './alimento/delete/delete-alimento.component';
import {EditAlimentoComponent} from './alimento/edit/edit-alimento.component';
import {CreateConsultaComponent} from './consultas/create/create-consulta.component';
import {ListConsultaComponent} from './consultas/list/list-consulta.component';
import {DeleteConsultaComponent} from './consultas/delete/delete-consulta.component';
import {EditConsultaComponent} from './consultas/edit/edit-consulta.component';
import {CreateFuncionariosComponent} from './funcionarios/create/create-funcionarios.component';
import {ListFuncionariosComponent} from './funcionarios/list/list-funcionarios.component';
import {DeleteFuncionariosComponent} from './funcionarios/delete/delete-funcionarios.component';
import {EditFuncionariosComponent} from './funcionarios/edit/edit-funcionarios.component';
import {ModoEdicaoComponent} from "./animais/edit/modo-edicao/modo-edicao.component";

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'animais', component: AnimaisComponent },
  { path: 'alimento', component: AlimentoComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'funcionarios', component: FuncionariosComponent },

  { path: 'createAnimal', component: CreateAnimalComponent },
  { path: 'listAnimal', component:  ListAnimalComponent },
  { path: 'deleteAnimal', component: DeleteAnimalComponent },
  { path: 'editAnimal', component: EditAnimalComponent },

  { path: 'createAlimento', component: CreateAlimentoComponent },
  { path: 'listAlimento', component:  ListAlimentoComponent },
  { path: 'deleteAlimento', component: DeleteAlimentoComponent },
  { path: 'editAlimento', component: EditAlimentoComponent },

  { path: 'createConsulta', component: CreateConsultaComponent },
  { path: 'listConsulta', component:  ListConsultaComponent },
  { path: 'deleteConsulta', component: DeleteConsultaComponent },
  { path: 'editConsulta', component: EditConsultaComponent },

  { path: 'createFuncionario', component: CreateFuncionariosComponent },
  { path: 'listFuncionario', component:  ListFuncionariosComponent },
  { path: 'deleteFuncionario', component: DeleteFuncionariosComponent },
  { path: 'editFuncionario', component: EditFuncionariosComponent },

  { path: 'modoEdicao/:id', component: ModoEdicaoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

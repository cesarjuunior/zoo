// @ts-ignore
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import {
  ButtonModule,
  CalendarModule,
  DropdownModule, FileUploadModule,
  InputMaskModule,
  InputTextModule,
  MenubarModule, MessageService,
  PanelMenuModule, SharedModule,
  TabMenuModule
} from 'primeng/primeng';
import {MenuComponent} from './menu/menu.component';
import {AnimaisComponent} from './animais/animais.component';
import {FuncionariosComponent} from './funcionarios/funcionarios.component';
import {AlimentoComponent} from './alimento/alimento.component';
import {ConsultasComponent} from './consultas/consultas.component';
import {CreateAnimalComponent} from './animais/create/create-animal.component';
import {ListAnimalComponent} from './animais/list/list-animal.component';
import {DeleteAnimalComponent} from './animais/delete/delete-animal.component';
import {EditAnimalComponent} from './animais/edit/edit-animal.component';
import {CreateAlimentoComponent} from './alimento/create/create-alimento.component';
import {ListAlimentoComponent} from './alimento/list/list-alimento.component';
import {EditAlimentoComponent} from './alimento/edit/edit-alimento.component';
import {DeleteAlimentoComponent} from './alimento/delete/delete-alimento.component';
import {CreateConsultaComponent} from "./consultas/create/create-consulta.component";
import {ListConsultaComponent} from "./consultas/list/list-consulta.component";
import {EditConsultaComponent} from "./consultas/edit/edit-consulta.component";
import {DeleteConsultaComponent} from "./consultas/delete/delete-consulta.component";
import {CreateFuncionariosComponent} from "./funcionarios/create/create-funcionarios.component";
import {ListFuncionariosComponent} from "./funcionarios/list/list-funcionarios.component";
import {EditFuncionariosComponent} from "./funcionarios/edit/edit-funcionarios.component";
import {DeleteFuncionariosComponent} from "./funcionarios/delete/delete-funcionarios.component";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './service/api.service';
import { ModoEdicaoComponent } from './animais/edit/modo-edicao/modo-edicao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnimaisComponent,
    FuncionariosComponent,
    AlimentoComponent,
    ConsultasComponent,
    CreateAnimalComponent,
    ListAnimalComponent,
    DeleteAnimalComponent,
    EditAnimalComponent,
    CreateAlimentoComponent,
    ListAlimentoComponent,
    EditAlimentoComponent,
    DeleteAlimentoComponent,
    CreateConsultaComponent,
    ListConsultaComponent,
    EditConsultaComponent,
    DeleteConsultaComponent,
    CreateFuncionariosComponent,
    ListFuncionariosComponent,
    EditFuncionariosComponent,
    DeleteFuncionariosComponent,
    ModoEdicaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelModule,
    InputMaskModule,
    PanelMenuModule,
    ButtonModule,
    MenubarModule,
    TabMenuModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    TableModule,
    HttpClientModule,
    SharedModule,
    FileUploadModule,
  ],
  providers: [ApiService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ZooBalburdia';
  items: MenuItem[];

  ngOnInit() {
   /* this.items = [
      {label: 'Animais', icon: 'fa fa-paw', routerLink: ['/animais']},
      {label: 'Funcionários', icon: 'fa fa-group', routerLink: ['/funcionarios']},
      {label: 'Alimento', icon: 'fa fa-cutlery', routerLink: ['/alimento']},
      {label: 'Consultas', icon: 'fa fa-heart-o', routerLink: ['/consultas']},
    ];*/
    this.items = [
      {
        label: 'Animais',
        icon: 'fa fa-paw',
        items: [
          {label: 'Listar', icon: 'fa fa-list', routerLink: ['/listAnimal']},
          {label: 'Criar', icon: 'fa fa-plus', routerLink: ['/createAnimal']},
          {label: 'Editar', icon: 'fa fa-pencil', routerLink: ['/editAnimal']},
          {label: 'Excluir', icon: 'fa fa-trash-o', routerLink: ['/deleteAnimal']}
        ]
      },
      {
        label: 'Funcionários',
        icon: 'fa fa-group',
        items: [
          {label: 'Listar', icon: 'fa fa-list', routerLink: ['/listFuncionario']},
          {label: 'Criar', icon: 'fa fa-plus', routerLink: ['/createFuncionario']},
          {label: 'Editar', icon: 'fa fa-pencil', routerLink: ['/editFuncionario']},
          {label: 'Excluir', icon: 'fa fa-trash-o', routerLink: ['/deleteFuncionario']}
        ]
      },
      {
        label: 'Alimento',
        icon: 'fa fa-cutlery',
        items: [
          {label: 'Listar', icon: 'fa fa-list', routerLink: ['/listAlimento']},
          {label: 'Criar', icon: 'fa fa-plus', routerLink: ['/createAlimento']},
          {label: 'Editar', icon: 'fa fa-pencil', routerLink: ['/editAlimento']},
          {label: 'Excluir', icon: 'fa fa-trash-o', routerLink: ['/deleteAlimento']}
        ]
      },
      {
        label: 'Consultas',
        icon: 'fa fa-heart-o',
        items: [
          {label: 'Listar', icon: 'fa fa-list', routerLink: ['/listConsulta']},
          {label: 'Criar', icon: 'fa fa-plus', routerLink: ['/createConsulta']},
          {label: 'Editar', icon: 'fa fa-pencil', routerLink: ['/editConsulta']},
          {label: 'Excluir', icon: 'fa fa-trash-o', routerLink: ['/deleteConsulta']}
        ]
      },
      {
        label: 'Início',
      }
    ];
  }
}

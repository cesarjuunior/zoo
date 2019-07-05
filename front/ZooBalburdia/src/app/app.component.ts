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
      }
    ];
  }
}

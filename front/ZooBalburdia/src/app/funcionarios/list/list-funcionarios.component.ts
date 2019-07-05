import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list-funcionarios.component.html',
  styleUrls: ['./list-funcionarios.component.css']
})
export class ListFuncionariosComponent implements OnInit {
  cars: any;

  constructor() { }

  ngOnInit() {
  }

}

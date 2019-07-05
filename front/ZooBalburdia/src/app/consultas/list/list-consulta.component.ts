import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list-consulta.component.html',
  styleUrls: ['./list-consulta.component.css']
})
export class ListConsultaComponent implements OnInit {
  cars: any;

  constructor() { }

  ngOnInit() {
  }

}

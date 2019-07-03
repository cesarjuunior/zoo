import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-create',
  templateUrl: './create-funcionarios.component.html',
  styleUrls: ['./create-funcionarios.component.css']
})
export class CreateFuncionariosComponent implements OnInit {

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }
  value: Date;
  val: string;
  
  cities: City[];

  selectedCity: City;
  ngOnInit() {
  }



}

// @ts-ignore
import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-create',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})
export class CreateAnimalComponent implements OnInit {

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

  }

  cities: City[];

  selectedCity: City;

  ngOnInit() {
  }

}

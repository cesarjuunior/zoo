// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {Animal} from '../animal';
import {ApiService} from '../../service/api.service';

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

  animal: Animal = new Animal();

  constructor(private apiService: ApiService ) {
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

  salvar() {
    console.log('CHEGOU AQUI');
    this.apiService.adicionaAnimal(this.animal).subscribe();
  }
}

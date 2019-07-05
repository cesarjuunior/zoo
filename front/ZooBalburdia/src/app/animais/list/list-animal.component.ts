// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Animal} from "../animal";

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'app-list',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.css']
})
export class ListAnimalComponent implements OnInit {

  animais: Animal[];


  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.listarAnimais();
  }


  listarAnimais() {
    this.apiService.getAnimais().subscribe(resultado => {
      this.animais = resultado;
      console.log(this.animais);
    });
  }
}

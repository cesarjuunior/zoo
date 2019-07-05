// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";

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

  cars: Car[];

  cols: any[];

  constructor(private apiService: ApiService) {

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  }

  ngOnInit() {
  }

  listarAnimais(){
    this.apiService.getAnimais().subscribe();
  }
}

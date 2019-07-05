// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete-animal.component.html',
  styleUrls: ['./delete-animal.component.css']
})
export class DeleteAnimalComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  excluir() {
    this.apiService.excluiAnimal(null).subscribe();
  }
}

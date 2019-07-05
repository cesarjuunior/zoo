// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Animal} from '../animal';
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete-animal.component.html',
  styleUrls: ['./delete-animal.component.css']
})
export class DeleteAnimalComponent implements OnInit {

  constructor(private apiService: ApiService,
              private router: Router) { }

  animais: Animal[];

  ngOnInit() {
    this.listarAnimais();
  }

  excluir(item) {
    console.log(item[8]);
    this.apiService.excluiAnimal(item[8]).subscribe(res => {
      this.router.navigate(['/listAnimal']);
    });
    this.listarAnimais();
    window.location.reload();


  }

  listarAnimais() {
    this.apiService.getAnimais().subscribe(resultado => {
      this.animais = resultado;
      console.log(this.animais);
    });
  }
}

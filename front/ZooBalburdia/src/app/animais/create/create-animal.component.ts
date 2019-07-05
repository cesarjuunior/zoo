// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {Animal} from '../animal';
import {ApiService} from '../../service/api.service';
import {SelectItem} from 'primeng/api';
import {DropdownUtils} from '../../util/dropdown.utils';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})
export class CreateAnimalComponent implements OnInit {

  constructor(private apiService: ApiService ) {
  }

  animal: Animal = new Animal();

  alimentos: SelectItem[] = [];
  containers: SelectItem[] = [];
  classes: SelectItem[] = [];
  responsaveis: SelectItem[] = [];

  ngOnInit() {
    this.preecherAlimentos();
    this.preecherContainers();
    this.preecherClasse();
    this.preecherResponsaveis();
  }

  salvar() {
    this.apiService.adicionaAnimal(this.animal).subscribe();
  }
  preecherAlimentos() {
    this.alimentos = [{ label: '', value: null }];
    this.apiService.getAlimentos().subscribe( res => {
      this.alimentos.push(...DropdownUtils.buildDropDown('nome', 'id', res));
    });
  }

  preecherContainers() {
    this.containers = [{ label: '', value: null }];
    this.apiService.getContainers().subscribe( res => {
      this.containers.push(...DropdownUtils.buildDropDown('tipo', 'id', res));
    });
  }

  preecherClasse() {
    this.classes = [{ label: '', value: null }];
    this.apiService.getClasses().subscribe( res => {
      this.classes.push(...DropdownUtils.buildDropDown('nomeDaClasse', 'id', res));
    });
  }


  preecherResponsaveis() {
    this.responsaveis = [{ label: '', value: null }];
    this.apiService.getFuncionarios().subscribe( res => {
      this.responsaveis.push(...DropdownUtils.buildDropDown('nome', 'matricula', res));
    });
  }
}

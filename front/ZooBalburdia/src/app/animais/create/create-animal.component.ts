// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {Animal} from '../animal';
import {ApiService} from '../../service/api.service';
import {MessageService, SelectItem} from 'primeng/api';
import {DropdownUtils} from '../../util/dropdown.utils';
import {Router} from '@angular/router';

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

  constructor(private apiService: ApiService,
              private router: Router,
              private messageService: MessageService) {
  }

  uploadedFiles: any[] = [];

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
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%');
    console.log(this.uploadedFiles);
    this.apiService.adicionaAnimal(this.animal).subscribe(res => {
      this.router.navigate(['/listAnimal']);
    });
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

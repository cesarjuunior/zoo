import { Component, OnInit } from '@angular/core';
import {Animal} from '../../animal';
import {ApiService} from '../../../service/api.service';
import {SelectItem} from 'primeng/api';
import {DropdownUtils} from '../../../util/dropdown.utils';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modo-edicao',
  templateUrl: './modo-edicao.component.html',
  styleUrls: ['./modo-edicao.component.css']
})
export class ModoEdicaoComponent implements OnInit {

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router : Router) {
  }

  animal: Animal = new Animal();

  alimentos: SelectItem[] = [];
  containers: SelectItem[] = [];
  classes: SelectItem[] = [];
  responsaveis: SelectItem[] = [];
  id: any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.apiService.getAnimal(params.id).subscribe(resultado => {
        this.animal = resultado;
        console.log(this.animal);
      });
    });
    this.preecherAlimentos();
    this.preecherContainers();
    this.preecherClasse();
    this.preecherResponsaveis();
  }

  salvar() {
    this.apiService.atualizaAnimal(this.id, this.animal).subscribe(res => {
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

// @ts-ignore
import { OnInit, Component } from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Animal} from '../animal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {

  animal: Animal = new Animal();
  animais: Animal[];


  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.listarAnimais();
  }

  editar(item) {
    this.router.navigate(['/modoEdicao', item[8]]);

    // this.apiService.atualizaAnimal(1, this.animal).subscribe();
  }
  listarAnimais() {
    this.apiService.getAnimais().subscribe(resultado => {
      this.animais = resultado;
      console.log(this.animais);
    });
  }
}

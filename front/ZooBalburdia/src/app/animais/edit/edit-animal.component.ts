// @ts-ignore
import { OnInit, Component } from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Animal} from '../animal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {

  animal: Animal = new Animal();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  editar() {
    this.apiService.atualizaAnimal(null, this.animal).subscribe();
  }
}

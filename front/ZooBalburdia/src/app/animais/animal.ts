import {Classe} from './classe';
import {Alimento} from '../alimento/alimento';
import {Container} from './container';
import {Funcionario} from '../funcionarios/funcionario';

export class Animal {
  nome: string;
  especie: string;
  altura: string;
  peso: string;
  classe: Classe = new Classe();
  alimento: Alimento = new Alimento();
  container: Container = new Container();
  responsavel: Funcionario = new Funcionario();
}

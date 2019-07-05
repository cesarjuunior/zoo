import {Cargo} from "./cargo";
import {Endereco} from "./endereco";

export class Funcionario {
  matricula: number;
  nome: string;
  escolaridade: string;
  cargo: Cargo;
  rg: string;
  cpf: string;
  crmv: string;
  endereco: Endereco;
  dataNascimento: Date;
}

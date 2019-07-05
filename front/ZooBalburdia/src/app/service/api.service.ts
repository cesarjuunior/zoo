import { Injectable } from '@angular/core';
import {Animal} from '../animais/animal';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Alimento} from '../alimento/alimento';
import {Funcionario} from '../funcionarios/funcionario';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const urlAnimais = 'http://localhost:8080/animais';
const urlAlimento = 'http://localhost:8080/alimento';
const urlFuncionario = 'http://localhost:8080/funcionarios';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

/*########################################################################################################
  ##############################     CRUD ANIMAIS    #####################################################
  ########################################################################################################
*/

  getAnimais(): Observable<Animal[]> {
    console.log('e pra ir');
    return this.http.get<Animal[]>(urlAnimais)
       .pipe(
         tap(animais => console.log('leu os produtos')),
         catchError(this.handleError('getProdutos', []))
       );
  }

  getAnimal(id: number): Observable<Animal> {
    const url = `${urlAnimais}/${id}`;
    return this.http.get<Animal>(url).pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Animal>(`getProduto id=${id}`))
    );
  }

  adicionaAnimal(animal): Observable<Animal> {
    console.log('CHEGOU AQUI');
    return this.http.post<Animal>(urlAnimais, animal, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((animal: Animal) => console.log(`adicionou o produto com w/ id=${animal.nome}`)),
      catchError(this.handleError<Animal>('addProduto'))
    );
  }

  atualizaAnimal(id, animal): Observable<any> {
    const url = `${urlAnimais}/${id}`;
    return this.http.put(url, animal, httpOptions).pipe(
      tap(_ => console.log(`atualiza o animal com id=${id}`)),
      catchError(this.handleError<any>('updateAnimal'))
    );
  }

  excluiAnimal(id): Observable<Animal> {
    const url = `${urlAnimais}/${id}`;

    return this.http.delete<Animal>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o produto com id=${id}`)),
      catchError(this.handleError<Animal>('deleteProduto'))
    );
  }

  /*########################################################################################################
  ##############################     CRUD ALIMENTO    #####################################################
  ########################################################################################################
*/


  getAlimentos(): Observable<Alimento[]> {
    console.log('e pra ir');
    return this.http.get<Alimento[]>(urlAlimento)
      .pipe(
        tap(alimento => console.log('leu os produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  getOneAlimento(id: number): Observable<Alimento> {
    const url = `${urlAlimento}/${id}`;
    return this.http.get<Alimento>(url).pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Alimento>(`getProduto id=${id}`))
    );
  }

  adicionaAlimento(alimento): Observable<Alimento> {
    console.log('CHEGOU AQUI');
    return this.http.post<Alimento>(urlAnimais, alimento, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((alimento: Alimento) => console.log(`adicionou o produto com w/ id=${alimento.nome}`)),
      catchError(this.handleError<Alimento>('addProduto'))
    );
  }

  atualizaAlimento(id, alimento): Observable<any> {
    const url = `${urlAlimento}/${id}`;
    return this.http.put(url, alimento, httpOptions).pipe(
      tap(_ => console.log(`atualiza o animal com id=${id}`)),
      catchError(this.handleError<any>('updateAnimal'))
    );
  }

  excluiAlimento(id): Observable<Alimento> {
    const url = `${urlAlimento}/${id}`;

    return this.http.delete<Alimento>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o produto com id=${id}`)),
      catchError(this.handleError<Alimento>('deleteProduto'))
    );
  }

  /*########################################################################################################
##############################     CRUD FUNCIONARIOS    #####################################################
########################################################################################################
*/

  getFuncionarios(): Observable<Funcionario[]> {
    console.log('e pra ir');
    return this.http.get<Funcionario[]>(urlFuncionario)
      .pipe(
        tap(alimento => console.log('leu os produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  getOneFuncionario(id: number): Observable<Funcionario> {
    const url = `${urlFuncionario}/${id}`;
    return this.http.get<Funcionario>(url).pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Funcionario>(`getProduto id=${id}`))
    );
  }

  adicionaFuncionario(funcionario): Observable<Funcionario> {
    console.log('CHEGOU AQUI');
    return this.http.post<Funcionario>(urlFuncionario, funcionario, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((funcionario: Funcionario) => console.log(`adicionou o produto com w/ id=${funcionario.nome}`)),
      catchError(this.handleError<Funcionario>('addProduto'))
    );
  }

  atualizaFuncionario(id, funcionario): Observable<any> {
    const url = `${urlFuncionario}/${id}`;
    return this.http.put(url, funcionario, httpOptions).pipe(
      tap(_ => console.log(`atualiza o animal com id=${id}`)),
      catchError(this.handleError<any>('updateAnimal'))
    );
  }

  excluiFuncionario(id): Observable<Funcionario> {
    const url = `${urlAlimento}/${id}`;

    return this.http.delete<Funcionario>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o produto com id=${id}`)),
      catchError(this.handleError<Funcionario>('deleteProduto'))
    );
  }

  /*########################################################################################################
  ##############################     CRUD CONSULTAS    #####################################################
  ########################################################################################################
*/
/*

  getConsultas(): Observable<Consulta[]> {
    console.log('e pra ir');
    return this.http.get<Consulta[]>(urlFuncionario)
      .pipe(
        tap(alimento => console.log('leu os produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  getOneFuncionario(id: number): Observable<Funcionario> {
    const url = `${urlFuncionario}/${id}`;
    return this.http.get<Funcionario>(url).pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Funcionario>(`getProduto id=${id}`))
    );
  }

  adicionaFuncionario(funcionario): Observable<Funcionario> {
    console.log('CHEGOU AQUI');
    return this.http.post<Funcionario>(urlFuncionario, funcionario, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((funcionario: Funcionario) => console.log(`adicionou o produto com w/ id=${funcionario.nome}`)),
      catchError(this.handleError<Funcionario>('addProduto'))
    );
  }

  atualizaFuncionario(id, funcionario): Observable<any> {
    const url = `${urlFuncionario}/${id}`;
    return this.http.put(url, funcionario, httpOptions).pipe(
      tap(_ => console.log(`atualiza o animal com id=${id}`)),
      catchError(this.handleError<any>('updateAnimal'))
    );
  }

  excluiFuncionario(id): Observable<Funcionario> {
    const url = `${urlAlimento}/${id}`;

    return this.http.delete<Funcionario>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o produto com id=${id}`)),
      catchError(this.handleError<Funcionario>('deleteProduto'))
    );
  }
*/


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

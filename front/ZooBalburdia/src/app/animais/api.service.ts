import { Injectable } from '@angular/core';
import {Animal} from './animal';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:8080/animais';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAnimais(): Observable<Animal[]> {
    console.log('e pra ir');
    return this.http.get<Animal[]>(apiUrl)
       .pipe(
         tap(animais => console.log('leu os produtos')),
         catchError(this.handleError('getProdutos', []))
       );
  }

  getAnimal(id: number): Observable<Animal> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Animal>(url).pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Animal>(`getProduto id=${id}`))
    );
  }

  adicionaAnimal(animal): Observable<Animal> {
    console.log('CHEGOU AQUI');
    return this.http.post<Animal>(apiUrl, animal, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((animal: Animal) => console.log(`adicionou o produto com w/ id=${animal.nome}`)),
      catchError(this.handleError<Animal>('addProduto'))
    );
  }

  atualizaAnimal(id, animal): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, animal, httpOptions).pipe(
      tap(_ => console.log(`atualiza o animal com id=${id}`)),
      catchError(this.handleError<any>('updateAnimal'))
    );
  }

  excluiAnimal(id): Observable<Animal> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Animal>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o produto com id=${id}`)),
      catchError(this.handleError<Animal>('deleteProduto'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

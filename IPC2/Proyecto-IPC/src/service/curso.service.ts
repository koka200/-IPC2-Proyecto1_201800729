import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private basePath:string = "http://localhost:3000/api/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }

  //HANDLE ERROR
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Un error ha ocurrido:', error.error.message);
    } else {
      console.error(
      `Backend returned code ${error.status}, ` +
      `body was: `, error.error);
    }
    return throwError(
      'Algo malo sucedio, por favor intentarlo más tarde D:');
  };

  obtenerTodos() : Observable<any> {
    let url = `${this.basePath}curso`;
    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    );
  }

  buscar(id:number) : Observable<any> {
    let url = `${this.basePath}curso/${id}`;
    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    );
  }

  crear(data:any) : Observable<any> {
    let url = `${this.basePath}curso`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  actualizar(data:any) : Observable<any> {
    let url = `${this.basePath}curso/${data.id}`;
    return this.http.put(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  eliminar(id:number) : Observable<any> {
    let url = `${this.basePath}curso/${id}`;
    return this.http.delete(url)
    .pipe(
      catchError(this.handleError)
    );
  }

}

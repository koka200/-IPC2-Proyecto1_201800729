import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //ESTE ES EL ENCABEZADO QUE USA POSTMAN
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }
  urlGlobal = "http://localhost:3000/api/"

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
//una vez teniendo el api de autenticacion lo consumimos en angular

  autenticar(data:any):Observable<any> {
    let url = `${this.urlGlobal}auth`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  getAll():Observable<any> {
    let url = `${this.urlGlobal}user`;
    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    )
  }

  crear(data:any):Observable<any>{
    let url = `${this.urlGlobal}usuario`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  getAllProductos():Observable<any> {
    let url = `${this.urlGlobal}producto`;
    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    )
  }

  //porveedores
  getAllproveedor():Observable<any> {
    let url = `${this.urlGlobal}proveedor`;
    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    )
  }

  crearProveed(data:any):Observable<any>{
    let url = `${this.urlGlobal}proveedor`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //Proyecto

  getAllCursos():Observable<any> {
    let url = `${this.urlGlobal}curso`;
    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    )
  }

  crearCurso(data:any):Observable<any>{
    let url = `${this.urlGlobal}curso`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Login } from '../models/login';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServiceCubos {
  constructor(private _http: HttpClient) {}

  getCubos(): Observable<any> {
    let request = 'api/cubos';
    let url = environment.urlApiCubos + request;
    return this._http.get(url);
  }

  findCuboById(idCubo: string): Observable<any> {
    let request = 'api/cubos/' + idCubo;
    let url = environment.urlApiCubos + request;
    return this._http.get(url);
  }

  getComentariosCuboById(idCubo: string): Observable<any> {
    let request = 'api/ComentariosCubo/GetComentariosCubo/' + idCubo;
    let url = environment.urlApiCubos + request;
    return this._http.get(url);
  }

  getMarcas(): Observable<any> {
    let request = 'api/cubos/marcas';
    let url = environment.urlApiCubos + request;
    return this._http.get(url);
  }

  getCubosMarca(marca: string): Observable<any> {
    let request = 'api/cubos/cubosmarca/' + marca;
    let url = environment.urlApiCubos + request;
    return this._http.get(url);
  }

  login(login: Login): Observable<any> {
    let json = JSON.stringify(login);
    let header = new HttpHeaders().set('Content-type', 'application/json');
    let request = 'api/manage/login';
    let url = environment.urlApiCubos + request;
    return this._http.post(url, json, { headers: header });
  }
}

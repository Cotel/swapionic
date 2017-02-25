import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Planet} from "../models/Planet";
import {Observable} from "rxjs";

@Injectable()
export class SwapiPlanets {

  constructor(public http: Http) { }

  loadPlanets(): Observable<Planet[]> {
    return this.http.get(`https://swapi.co/api/planets`)
      .map(result => <Planet[]>result.json().results)
  }

  getPlanetById(id: number): Observable<Planet> {
    return this.http.get(`https://swapi.co/api/planets/${id}/`)
      .map(result => <Planet>result.json());
  }

}

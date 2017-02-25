import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Character} from "../models/Character";
import {Observable} from "rxjs";

@Injectable()
export class SwapiCharacters {
  private swapiUrl = `https://swapi.co/api`;

  constructor(public http: Http) { }

  loadCharacters(): Observable<Character[]> {
    return this.http.get(`${this.swapiUrl}/people/`)
      .map(res => <Character[]>res.json().results.map(toPerson));
  }

  loadCharacterByUrl(url: string): Observable<Character> {
    return this.http.get(url)
      .map(res => <Character>toPerson(res.json()));
  }
}

const toPerson = (result: any): Character => {
  return <Character>({
    id: extractId(result.url),
    name: result.name,
    gender: result.gender,
    height: result.height,
    weight: result.mass,
    birth_year: result.birth_year,
    homeworld: extractHomeworldId(result.homeworld)
  });
}

const extractId = (url: string): number  => {
  const extractedId = url.replace('http://swapi.co/api/people/', '').replace('/', '');
  return parseInt(extractedId);
}

const extractHomeworldId = (url: string): number => {
  const extractedId = url.replace('http://swapi.co/api/planets/', '').replace('/', '');
  return parseInt(extractedId);
}

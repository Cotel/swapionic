import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Movie} from "../models/Movie";

@Injectable()
export class SwapiMovies {
  private swapiUrl = `https://swapi.co/api`;

  constructor(public http: Http) { }

  loadMovies(): Observable<Movie[]> {
    return this.http.get(`${this.swapiUrl}/films/`)
      .map(res => <Movie[]>res.json().results.map(toMovie))
  }

}

const toMovie = (result: any): Movie => {
  return <Movie>({
    title: result.title,
    episode: result.episode_id,
    release_date: result.release_date,
    characters: result.characters
  });
};

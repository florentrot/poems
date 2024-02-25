import { Injectable } from '@angular/core';
import {Poem} from "../models/poem";
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PoemService {
  poems: Map<number, Poem> = new Map();
  constructor(private http: HttpClient) {}

  getPoems(): Observable<Map<number, Poem>> {
    const poemFiles = [
      '1-moment-publicitar.json',
      '2-frig.json',
      '3-criza-de-toamna.json',
      '4-duet.json',
      '5-trecator.json',
      '6-erotism-vin-si-metafore.json',
      '7-furtuna-dinaintea-linistii.json',
      '8-insomnii.json',
      '9-inspirat-din-faust.json',
      '10-cugetare-existentiala.json',
      '11-diversitate.json',
      '12-fericirea-relativa.json',
      '13-gandul.json',
      '14-seara-pe-centrul-vechi.json',
      '15-poezia-timpului.json'
    ];

    const requests = poemFiles.map(file => this.http.get<Poem>('assets/poezii/' + file));

    return forkJoin(requests).pipe(
      map(poems => {
        poems.forEach(poem => {
          this.poems.set(poem.id, poem);
        });
        return this.poems;
      })
    );
  }

}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGetCharacter } from '../models/rickandmorty.model';

@Injectable({ providedIn: 'root' })
export class RickAndMortyService {
  constructor(private httpClient: HttpClient) { }

  getRickAndMorty(page: number, status: string): Observable<IGetCharacter> {
    return this.httpClient.get<IGetCharacter>(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}`)
  }
}

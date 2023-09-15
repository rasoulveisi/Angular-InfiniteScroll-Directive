

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISearchResponse, IOrderType } from '../models/github.model';

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private httpClient: HttpClient) { }

  getSearchResult(keyword: string, page: number, perPage: number, order: IOrderType): Observable<ISearchResponse> {
    return this.httpClient.get<ISearchResponse>(`https://api.github.com/search/users?q=${keyword}&order=${order}&page=${page}&per_page=${perPage}`)
  }
}

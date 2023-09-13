

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISearchResponse } from '../models/github.model';

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private httpClient: HttpClient) { }

  getSearchResult(keyword: string): Observable<ISearchResponse> {
    return this.httpClient.request<ISearchResponse>('get', `https://api.github.com/search/users?q=${keyword}`)
  }
}

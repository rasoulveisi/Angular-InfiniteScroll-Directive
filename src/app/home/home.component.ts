import { Component, OnInit } from '@angular/core';
import { ISearchResponse, IUser } from '../@core/models/github.model';
import { GithubService } from '../@core/services/github.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchResults: IUser[] = [];
  keyword: string = '';
  constructor(private github: GithubService) {
  }

  ngOnInit(): void {
  }

  onInputChange(event: any) {
    this.keyword = event.target.value

    this.github.getSearchResult(this.keyword).subscribe((x: ISearchResponse) => { this.searchResults = x.items })
  }
}

import { Component, OnInit } from '@angular/core';
import { ISearchResponse, IUser, IOrderType } from '../@core/models/github.model';
import { GithubService } from '../@core/services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  searchResults: IUser[] = [];
  keyword: string = '';
  loading: boolean = false;
  page: number = 0;
  perPage: number = 40;
  orderType: IOrderType = 'desc';
  isScroll: boolean = false;

  constructor(private github: GithubService) { }

  ngOnInit(): void { }

  onSearchClicked() {
    this.getResult(this.isScroll);
  }

  loadMore() {
    if (this.loading) return
    this.loading = true;
    this.page++;
    this.isScroll = true;
    this.getResult(this.isScroll);
  }

  getResult(isScroll: boolean) {
    this.loading = true;
    this.github.getSearchResult(this.keyword, this.page, this.perPage, this.orderType).subscribe((result: ISearchResponse) => {
      if (isScroll) { this.searchResults.push(...result.items) } else {
        this.searchResults = result.items;
      }
      this.loading = false;
      this.isScroll = false;
    },
      error => {
        this.loading = false;
        this.isScroll = false;
      })
  }


  onReset() {
    this.searchResults = [];
  }
}

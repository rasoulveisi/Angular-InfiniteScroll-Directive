import { Component, OnInit } from '@angular/core';
import { ICharacterResult, IGetCharacter } from '../@core/models/rickandmorty.model';
import { RickAndMortyService } from '../@core/services/rickandmorty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit {

  loading: boolean = false;
  page: number = 0;
  rickAndMortyResults: ICharacterResult[] = [];
  status: 'alive' | 'dead' | 'unknown' | '' = '';
  constructor(private rickAndMorty: RickAndMortyService) { }

  ngOnInit(): void {
    this.getResult();
  }


  loadMore() {
    if (this.loading) return
    this.loading = true;
    this.page++;
    this.getResult();
  }

  getResult() {
    this.loading = true;
    this.rickAndMorty.getRickAndMorty(this.page, this.status).subscribe((result: IGetCharacter) => {
      this.rickAndMortyResults.push(...result.results);
      this.loading = false;
    },
      error => {
        this.loading = false;
      })
  }

  onChangeOrder() {
  }
}

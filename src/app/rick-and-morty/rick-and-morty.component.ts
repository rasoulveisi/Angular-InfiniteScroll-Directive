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
  selectedStatus: 'alive' | 'dead' | 'unknown' | '' = '';
  status = [
    { id: 1, name: 'alive' },
    { id: 2, name: 'dead' },
    { id: 3, name: 'unknown' },
  ]

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
    this.rickAndMorty.getRickAndMorty(this.page, this.selectedStatus).subscribe((result: IGetCharacter) => {
      this.rickAndMortyResults.push(...result.results);
      this.loading = false;
    },
      error => {
        this.loading = false;
      })
  }

  onSelectStatus(event: { id: number, name: string }) {
    this.selectedStatus = event.name as 'alive' | 'dead' | 'unknown';
    this.rickAndMortyResults = [];
    this.getResult();
  }
}

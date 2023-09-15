import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
import { GithubComponent } from './home/github.component';

const routes: Routes = [

  { path: '', redirectTo: 'github', pathMatch: 'full' },
  {
    path: 'rick-and-morty',
    component: RickAndMortyComponent
  },
  {
    path: 'github',
    component: GithubComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

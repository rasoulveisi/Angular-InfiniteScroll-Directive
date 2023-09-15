import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { infinitScrollDirective } from './shared/directive/infinite-scroll.directive';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { GithubComponent } from './home/github.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    infinitScrollDirective,
    RickAndMortyComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

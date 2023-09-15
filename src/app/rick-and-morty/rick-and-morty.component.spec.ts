import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyComponent } from './rick-and-morty.component';

describe('RickAndMortyComponent', () => {
  let component: RickAndMortyComponent;
  let fixture: ComponentFixture<RickAndMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickAndMortyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

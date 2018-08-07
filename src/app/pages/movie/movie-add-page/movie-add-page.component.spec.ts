import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAddPageComponent } from './movie-add-page.component';

describe('MovieAddPageComponent', () => {
  let component: MovieAddPageComponent;
  let fixture: ComponentFixture<MovieAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovieMovieDialogComponent } from './removie-movie-dialog.component';

describe('RemovieMovieDialogComponent', () => {
  let component: RemovieMovieDialogComponent;
  let fixture: ComponentFixture<RemovieMovieDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovieMovieDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovieMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

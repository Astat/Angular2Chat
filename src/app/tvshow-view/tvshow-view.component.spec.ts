import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowViewComponent } from './tvshow-view.component';

describe('TvshowViewComponent', () => {
  let component: TvshowViewComponent;
  let fixture: ComponentFixture<TvshowViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

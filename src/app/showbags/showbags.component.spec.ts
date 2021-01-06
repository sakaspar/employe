import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbagsComponent } from './showbags.component';

describe('ShowbagsComponent', () => {
  let component: ShowbagsComponent;
  let fixture: ComponentFixture<ShowbagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowbagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

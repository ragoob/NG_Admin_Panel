import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETableComponent } from './e-table.component';

describe('ETableComponent', () => {
  let component: ETableComponent;
  let fixture: ComponentFixture<ETableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

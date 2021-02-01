import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicColumn2Component } from './basic-column2.component';

describe('BasicColumn2Component', () => {
  let component: BasicColumn2Component;
  let fixture: ComponentFixture<BasicColumn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicColumn2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicColumn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

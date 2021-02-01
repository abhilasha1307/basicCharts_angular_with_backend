import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicColumn1Component } from './basic-column1.component';

describe('BasicColumn1Component', () => {
  let component: BasicColumn1Component;
  let fixture: ComponentFixture<BasicColumn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicColumn1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicColumn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

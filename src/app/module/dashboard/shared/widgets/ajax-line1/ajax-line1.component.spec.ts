import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxLine1Component } from './ajax-line1.component';

describe('AjaxLine1Component', () => {
  let component: AjaxLine1Component;
  let fixture: ComponentFixture<AjaxLine1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjaxLine1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxLine1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

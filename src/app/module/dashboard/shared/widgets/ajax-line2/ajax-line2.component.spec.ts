import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxLine2Component } from './ajax-line2.component';

describe('AjaxLine2Component', () => {
  let component: AjaxLine2Component;
  let fixture: ComponentFixture<AjaxLine2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjaxLine2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxLine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

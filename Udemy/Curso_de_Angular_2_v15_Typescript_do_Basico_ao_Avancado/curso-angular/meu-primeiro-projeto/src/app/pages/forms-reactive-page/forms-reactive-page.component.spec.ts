import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReactivePageComponent } from './forms-reactive-page.component';

describe('FormsReactivePageComponent', () => {
  let component: FormsReactivePageComponent;
  let fixture: ComponentFixture<FormsReactivePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsReactivePageComponent]
    });
    fixture = TestBed.createComponent(FormsReactivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

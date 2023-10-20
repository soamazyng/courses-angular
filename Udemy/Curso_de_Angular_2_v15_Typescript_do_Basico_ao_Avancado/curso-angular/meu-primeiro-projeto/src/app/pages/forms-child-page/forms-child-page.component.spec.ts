import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsChildPageComponent } from './forms-child-page.component';

describe('FormsChildPageComponent', () => {
  let component: FormsChildPageComponent;
  let fixture: ComponentFixture<FormsChildPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsChildPageComponent]
    });
    fixture = TestBed.createComponent(FormsChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasPageComponent } from './diretivas-page.component';

describe('DiretivasPageComponent', () => {
  let component: DiretivasPageComponent;
  let fixture: ComponentFixture<DiretivasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasPageComponent]
    });
    fixture = TestBed.createComponent(DiretivasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

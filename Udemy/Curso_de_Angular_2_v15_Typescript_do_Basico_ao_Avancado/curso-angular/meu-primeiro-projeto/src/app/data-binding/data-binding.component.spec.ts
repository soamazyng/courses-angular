import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

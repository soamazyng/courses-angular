import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsComponent } from './reactive-forms.component';

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the required length if it exists', () => {
    let field = 'existingField';
    expect(component.requiredLength(field)).toEqual(0);
    field = 'testField';
    component.saveForm.get(field)?.setErrors({ minlength: { requiredLength: 5 } });
    expect(component.requiredLength(field)).toEqual(5);
  });

  it('should return 0 if the required length does not exist', () => {
    const field = 'testField';
    component.saveForm.get(field)?.setErrors({ minlength: null });
    expect(component.requiredLength(field)).toEqual(0);
  });

  it('should return 0 if the field does not exist', () => {
    const field = 'nonexistentField';
    expect(component.requiredLength(field)).toEqual(0);
  });


});

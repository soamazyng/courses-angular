import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  public submitted: boolean = false;
  public saveForm: FormGroup = this.formBuilder.group({
    nome: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(10)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: [''],
    confirmPassword: [''],
  });

  public requiredLength(field: string): number {
    const minLength =
      this.saveForm.get(field)?.errors?.['minlength']?.requiredLength;
    return minLength ? minLength : 0;
  }

  public actualLength(field: string): number {
    const minLength =
      this.saveForm.get(field)?.errors?.['minlength']?.actualLength;
    return minLength ? minLength : 0;
  }

  constructor(private formBuilder: FormBuilder) {}

  public onSubmit(): void {
    this.submitted = true;
    if (this.saveForm.valid) {
      console.log(this.saveForm.value);
      console.log(this.saveForm.value.nome);
    }
  }
}

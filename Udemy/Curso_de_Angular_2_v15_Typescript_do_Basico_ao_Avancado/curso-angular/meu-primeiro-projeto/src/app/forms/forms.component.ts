import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  user = {
    frameworks: [
      { name: 'Angular', selected: true, id: 12 },
      { name: 'Vue', selected: false, id: 2 },
      { name: 'React', selected: false, id: 14 },
    ],
  };

  sendForm(submitForm: NgForm) {
    if (submitForm) console.log(submitForm);
  }
}

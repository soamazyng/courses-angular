import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms-page',
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.scss'],
})
export class FormsPageComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // pega os parametros de url :id e :username
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id'], params['username']);
    });

    // pega os parametros de url ?name=valor&age=valor
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams['name'], queryParams['age']);
    });
  }
}

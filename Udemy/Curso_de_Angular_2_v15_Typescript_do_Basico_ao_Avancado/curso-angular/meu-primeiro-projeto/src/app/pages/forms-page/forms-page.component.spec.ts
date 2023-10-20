import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPageComponent } from './forms-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('FormsPageComponent', () => {
  let component: FormsPageComponent;
  let fixture: ComponentFixture<FormsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: '1',
              username: 'teste',
            }),
            queryParams: of({
              name: 'teste',
              age1: '20',
            }),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(FormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

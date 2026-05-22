import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoCard } from './recurso-card';

describe('RecursoCard', () => {
  let component: RecursoCard;
  let fixture: ComponentFixture<RecursoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecursoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

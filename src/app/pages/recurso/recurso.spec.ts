import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recurso } from './recurso';

describe('Recurso', () => {
  let component: Recurso;
  let fixture: ComponentFixture<Recurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Recurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recurso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

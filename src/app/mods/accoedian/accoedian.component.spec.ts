import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoedianComponent } from './accoedian.component';

describe('AccoedianComponent', () => {
  let component: AccoedianComponent;
  let fixture: ComponentFixture<AccoedianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoedianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoedianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

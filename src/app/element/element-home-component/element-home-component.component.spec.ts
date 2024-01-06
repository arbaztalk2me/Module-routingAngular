import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementHomeComponentComponent } from './element-home-component.component';

describe('ElementHomeComponentComponent', () => {
  let component: ElementHomeComponentComponent;
  let fixture: ComponentFixture<ElementHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementHomeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

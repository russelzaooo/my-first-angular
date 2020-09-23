import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OliveiraComponent } from './oliveira.component';

describe('OliveiraComponent', () => {
  let component: OliveiraComponent;
  let fixture: ComponentFixture<OliveiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OliveiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OliveiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

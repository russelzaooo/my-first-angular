import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartinhoComponent } from './martinho.component';

describe('MartinhoComponent', () => {
  let component: MartinhoComponent;
  let fixture: ComponentFixture<MartinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MartinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

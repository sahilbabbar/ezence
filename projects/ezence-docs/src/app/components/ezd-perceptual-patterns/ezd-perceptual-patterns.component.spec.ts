import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzdPerceptualPatternsComponent } from './ezd-perceptual-patterns.component';

describe('EzdPerceptualPatternsComponent', () => {
  let component: EzdPerceptualPatternsComponent;
  let fixture: ComponentFixture<EzdPerceptualPatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzdPerceptualPatternsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzdPerceptualPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzdPatternsComponent } from './ezd-patterns.component';

describe('EzdPatternsComponent', () => {
  let component: EzdPatternsComponent;
  let fixture: ComponentFixture<EzdPatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzdPatternsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzdPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

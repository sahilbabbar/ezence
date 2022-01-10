import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzdHomeComponent } from './ezd-home.component';

describe('EzdHomeComponent', () => {
  let component: EzdHomeComponent;
  let fixture: ComponentFixture<EzdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzdHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

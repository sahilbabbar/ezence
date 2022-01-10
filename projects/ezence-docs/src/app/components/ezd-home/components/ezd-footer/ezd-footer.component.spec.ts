import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzdFooterComponent } from './ezd-footer.component';

describe('EzdFooterComponent', () => {
  let component: EzdFooterComponent;
  let fixture: ComponentFixture<EzdFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzdFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzdFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

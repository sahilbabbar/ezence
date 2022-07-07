import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzdFunctionalPatternsComponent } from './ezd-functional-patterns.component';

describe('EzdPatternsComponent', () => {
    let component: EzdFunctionalPatternsComponent;
    let fixture: ComponentFixture<EzdFunctionalPatternsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EzdFunctionalPatternsComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EzdFunctionalPatternsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

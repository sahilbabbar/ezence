import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EzenceComponent} from './ezence.component';

describe('EzenceComponent', () => {
    let component: EzenceComponent;
    let fixture: ComponentFixture<EzenceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EzenceComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EzenceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {TestBed} from '@angular/core/testing';

import {EzenceService} from './ezence.service';

describe('EzenceService', () => {
    let service: EzenceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EzenceService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

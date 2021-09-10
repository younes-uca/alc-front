import {TestBed} from '@angular/core/testing';
import {WebSocketstudentService} from './web-socketstudent.service';

describe('WebSocketstudentService', () => {
    let service: WebSocketstudentService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WebSocketstudentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

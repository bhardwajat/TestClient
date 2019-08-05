import { TestBed } from '@angular/core/testing';
import { HealthCalendarService } from './health-calendar.service';
describe('HealthCalendarService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HealthCalendarService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=health-calendar.service.spec.js.map
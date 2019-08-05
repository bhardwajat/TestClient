import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var HealthCalendarService = /** @class */ (function () {
    function HealthCalendarService(http) {
        this.http = http;
    }
    HealthCalendarService.prototype.addEvent = function (title, description, startTime, endTime, location, isMedication) {
        return this.http
            .post('http://localhost:3000/health-calendar', {
            userId: 1,
            title: title,
            description: description,
            startTime: startTime,
            endTime: endTime,
            location: location,
            isMedication: isMedication
        }, { responseType: 'text' });
    };
    HealthCalendarService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HealthCalendarService);
    return HealthCalendarService;
}());
export { HealthCalendarService };
//# sourceMappingURL=health-calendar.service.js.map
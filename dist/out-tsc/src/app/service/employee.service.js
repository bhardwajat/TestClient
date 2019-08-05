import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = "http://localhost:3000/employees";
        console.log('Hello Service Provider!');
    }
    //  getEmployees(){
    //    return this.http.get(this.url)
    //    .pipe(tap(res => console.log(res)));
    //  }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.url).pipe(map(function (response) { return response.json(); }));
    };
    EmployeeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], EmployeeService);
    return EmployeeService;
}());
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map
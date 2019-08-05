import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
var HomePage = /** @class */ (function () {
    function HomePage(employeeService) {
        this.employeeService = employeeService;
        this.employeeList = [];
        this.getEmployees();
    }
    // getEmployees(){
    //   this.employeeService.getEmployees().subscribe(data => console.log(data));
    // }
    HomePage.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (data) { return _this.employeeList = data; });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [EmployeeService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map
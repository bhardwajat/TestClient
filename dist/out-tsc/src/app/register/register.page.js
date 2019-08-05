import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(reg) {
        this.reg = reg;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.userSignup = function () {
        this.reg.registerUser(this.username, this.password)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [RegisterService])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map
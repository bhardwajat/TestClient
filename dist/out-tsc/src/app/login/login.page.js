import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.logindata = {};
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.loginPage = function () {
        var _this = this;
        if (this.logindata.email != "" && this.logindata.password != "") {
            console.log("email: ", this.logindata.email);
            console.log("pass: ", this.logindata.password);
            var url = "http://localhost:3000/login/user";
            var dataPost = new FormData();
            dataPost.append('user', this.logindata.email);
            dataPost.append('pass', this.logindata.password);
            var data = this.http.post('http://localhost:3000/login/user', {
                email: this.logindata.email,
                password: this.logindata.password
            });
            data
                .subscribe(function (res) {
                if (res != null) {
                    _this.navCtrl.navigateForward('/home');
                }
            });
        }
        else {
            console.log("Enter password");
        }
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, HttpClient])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map
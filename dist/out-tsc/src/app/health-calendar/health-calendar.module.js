import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HealthCalendarPage } from './health-calendar.page';
import { NgCalendarModule } from 'ionic2-calendar';
var routes = [
    {
        path: '',
        component: HealthCalendarPage
    }
];
var HealthCalendarPageModule = /** @class */ (function () {
    function HealthCalendarPageModule() {
    }
    HealthCalendarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                NgCalendarModule
            ],
            declarations: [HealthCalendarPage]
        })
    ], HealthCalendarPageModule);
    return HealthCalendarPageModule;
}());
export { HealthCalendarPageModule };
//# sourceMappingURL=health-calendar.module.js.map
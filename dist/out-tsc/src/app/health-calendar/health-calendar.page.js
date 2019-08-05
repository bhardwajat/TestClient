import * as tslib_1 from "tslib";
import { Component, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { HealthCalendarService } from '../service/health-calendar.service';
var HealthCalendarPage = /** @class */ (function () {
    function HealthCalendarPage(alertCtrl, locale, datePipe, add) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.datePipe = datePipe;
        this.add = add;
        this.event = {
            title: '',
            description: '',
            startTime: '',
            endTime: '',
            location: '',
            isMedication: false
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
    }
    HealthCalendarPage.prototype.ngOnInit = function () {
        this.resetEvent();
    };
    HealthCalendarPage.prototype.resetEvent = function () {
        this.event = {
            title: '',
            description: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            location: '',
            isMedication: false
        };
    };
    HealthCalendarPage.prototype.addEvent = function () {
        var eventCopy = {
            title: this.event.title,
            description: this.event.description,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.endTime),
            location: this.event.location,
            isMedication: this.event.isMedication
        };
        // if (eventCopy.allDay) {
        //   let start = eventCopy.startTime;
        //   let end = eventCopy.endTime;
        //   eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
        //   eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        // }
        this.add.addEvent(this.event.title, this.event.description, this.event.startTime, this.event.endTime, this.event.location, this.event.isMedication)
            .subscribe(function (res) {
            console.log(res);
        });
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    HealthCalendarPage.prototype.next = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    };
    HealthCalendarPage.prototype.back = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    };
    HealthCalendarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    // Focus today
    HealthCalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    // Selected date range and hence title changed
    HealthCalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    // Calendar event was clicked
    HealthCalendarPage.prototype.onEventSelected = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var start, end, alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = this.datePipe.transform(event.startTime, 'dd/MM/yyyy');
                        end = this.datePipe.transform(event.endTime, 'dd/MM/yyyy');
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: event.title,
                                subHeader: event.desc,
                                message: 'From: ' + start + '<br><br>To: ' + end,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Time slot was clicked
    HealthCalendarPage.prototype.onTimeSelected = function (ev) {
        var selected = new Date(ev.selectedTime);
        this.event.startTime = selected.toISOString();
        selected.setHours(selected.getHours() + 1);
        this.event.endTime = (selected.toISOString());
    };
    tslib_1.__decorate([
        ViewChild(CalendarComponent),
        tslib_1.__metadata("design:type", CalendarComponent)
    ], HealthCalendarPage.prototype, "myCal", void 0);
    HealthCalendarPage = tslib_1.__decorate([
        Component({
            selector: 'app-health-calendar',
            templateUrl: './health-calendar.page.html',
            styleUrls: ['./health-calendar.page.scss'],
        }),
        tslib_1.__param(1, Inject(LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [AlertController, String, DatePipe, HealthCalendarService])
    ], HealthCalendarPage);
    return HealthCalendarPage;
}());
export { HealthCalendarPage };
//# sourceMappingURL=health-calendar.page.js.map
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  showPopup = false;
  popupMonth;
  popupDay;

  date = new Date();

  lastDay = new Date(
    this.date.getFullYear(),
    this.date.getMonth() + 1,
    0
  ).getDate();

  prevLastDay = new Date(
    this.date.getFullYear(),
    this.date.getMonth(),
    0
  ).getDate();

  firstDayIndex = this.date.getDay();

  lastDayIndex = new Date(
    this.date.getFullYear(),
    this.date.getMonth() + 1,
    0
  ).getDay();

  nextDays = 7 - this.lastDayIndex - 1;

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  days = [];
  today;
  prevDays = [];
  nextDay = [];


  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar(): any {
    this.today = '';
    this.days = [];
    this.prevDays = [];
    this.nextDay = [];


    for (let x = this.firstDayIndex; x > 0; x--) {
      this.prevDays.push(this.prevLastDay - x + 1);
    }

    for (let i = 1; i <= this.lastDay; i++) {
      if (
        i === new Date().getDate() &&
        this.date.getMonth() === new Date().getMonth()
      ) {
        this.today = i;
      } else {
        this.days.push(i);
      }
    }

    for (let j = 1; j <= this.nextDays; j++) {
      this.nextDay.push(j);
    }
  }

  prev(): any {
    this.date.setMonth(this.date.getMonth() - 1);
    this.renderCalendar();
  }

  next(): any {
    this.date.setMonth(this.date.getMonth() + 1);
    this.renderCalendar();
  }


  selectDate(day: any): any {
    this.showPopup = true;
    this.popupMonth = this.months[this.date.getMonth()];
    this.popupDay = day + 'th';
  }
}

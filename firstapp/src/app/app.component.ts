import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import * as moment from 'moment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AppComponent {
  minDate: string;
  maxDate: string;
  selectedDate: string;
  today: string;
  yesterday: string;
  tenDaysBefore: string;
  oneYearBefore: string;
  submitted: boolean;

  constructor() {
    this.initDates();
    this.minDate = moment().add(1, 'days').format('YYYY-MM-DD');
    this.maxDate = moment().add(5, 'years').format('YYYY-MM-DD');
  }

  initDates() {
    const todayMoment = moment();
    this.today = todayMoment.format('MM/DD/YYYY');
    this.yesterday = todayMoment.subtract(1, 'days').format('MM/DD/YYYY');
    this.minDate = todayMoment.add(1, 'days').format('YYYY-MM-DD');
    this.maxDate = todayMoment.add(5, 'years').format('YYYY-MM-DD');
    this.submitted = false;

    // Initialize tenDaysBefore and oneYearBefore variables
    this.tenDaysBefore = moment().subtract(10, 'days').format('MM/DD/YYYY');
    this.oneYearBefore = moment().subtract(1, 'years').format('MM/DD/YYYY');
  }


  // app.component.ts
  updateSelectedDate(event: Event) {
    const target = event.target as HTMLIonDatetimeElement;
    this.selectedDate = target.value as string;
    this.updateDate();
  }


  updateDate() {
    const selectedMoment = moment(this.selectedDate);
    const tenDaysBeforeMoment = selectedMoment.clone().subtract(10, 'days');
    const oneYearBeforeMoment = selectedMoment.clone().subtract(1, 'years');

    this.tenDaysBefore = tenDaysBeforeMoment.format('MM/DD/YYYY');
    this.oneYearBefore = oneYearBeforeMoment.format('MM/DD/YYYY');
  }


  onSubmit() {
    this.submitted = true;
    console.log('Submitted form with selected date:', this.selectedDate);
    console.log('Today:', this.today);
    console.log('Yesterday:', this.yesterday);
    console.log('10 days before selected date:', this.tenDaysBefore);
    console.log('1 year before selected date:', this.oneYearBefore);
  }
} 

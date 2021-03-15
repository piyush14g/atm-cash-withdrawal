import { Component } from '@angular/core';
import { balance, calculateNoteDispense, denominations, ResultObject } from './utils/app-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to ATM';
  resultArray: Array<ResultObject>;
  remBalance = balance;
  errorText: string;
  denominations = denominations;

  calculate(event): void {
    this.errorText = '';
    const divisibleNumber = this.denominations[this.denominations.length - 1];
    if (event.amount % divisibleNumber > 0) {
      this.errorText = `Amount should be divisible by ${divisibleNumber}`;
      return;
    } else if (event?.note && event.amount < event?.note) {
      this.errorText = 'Amount should be more than preffered denomination';
      return;
    } else if (event.amount > Number(this.remBalance)) {
      this.errorText = 'Insufficient Balance!';
      return;
    }
    this.resultArray = calculateNoteDispense(event?.amount, event?.note);
    this.remBalance = Number(this.remBalance) - Number(event?.amount);
  }
}

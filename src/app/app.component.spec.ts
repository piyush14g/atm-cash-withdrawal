import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { balance, denominations } from './utils/app-utils';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'atm-cash-withdrawal'`, () => {
    expect(component.title).toEqual('Welcome to ATM');
  });

  it('should validate values before calculating notes dispensed ', () => {
    const values = {
      amount: 100,
      note: 500,
    };
    const values1 = {
      amount: 1001,
    };
    const values2 = {
      amount: 999020009990,
      note: 200,
    };
    component.calculate(values);
    expect(component.errorText).toEqual('Amount should be more than preffered denomination');
    component.calculate(values1);
    expect(component.errorText).toEqual(`Amount should be divisible by ${denominations[denominations.length - 1]}`);
    component.calculate(values2);
    expect(component.errorText).toEqual('Insufficient Balance!');
  });

  it('should show remaining balance after calculating notes dispensed ', () => {
    const values = {
      amount: 1000,
      note: 500,
    };
    component.calculate(values);
    expect(component.remBalance).toEqual(balance - values.amount);
  });

  it('should get result array after calculating notes dispensed', () => {
    const values = {
      amount: 10000,
    };
    const values2 = {
      amount: 10000,
      note: 200
    };
    const result = [
      { count: 20, note: 500 },
      { count: 0, note: 200 },
      { count: 0, note: 100 },
      { count: 0, note: 50 },
      { count: 0, note: 20 },
      { count: 0, note: 10 }
    ];
    const result2 = [
      { count: 50, note: 200 },
      { count: 0, note: 100 },
      { count: 0, note: 50 },
      { count: 0, note: 20 },
      { count: 0, note: 10 }
    ];
    component.calculate(values);
    expect(component.resultArray).toEqual(result);
    component.calculate(values2);
    expect(component.resultArray).toEqual(result2);
  });
});

import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { denominations } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-atm-form',
  templateUrl: './atm-form.component.html',
  styleUrls: ['./atm-form.component.scss']
})
export class AtmFormComponent {
  atmForm: FormGroup;
  denominations = denominations;
  @Output() submitHandler = new EventEmitter();
  @Input() formError: string;

  constructor(public formBuilder: FormBuilder) {
    this.atmForm = this.formBuilder.group({
      amount: ['', Validators.required],
      denomination: [''],
    });
  }

  onSubmit(): void {
    this.submitHandler.emit({ amount: this.atmForm.get('amount').value, note: this.atmForm.get('denomination').value });
  }

}

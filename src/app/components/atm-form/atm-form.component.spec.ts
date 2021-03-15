import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AtmFormComponent } from './atm-form.component';

describe('AtmFormComponent', () => {
  let component: AtmFormComponent;
  let fixture: ComponentFixture<AtmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmFormComponent],
      providers: [
        FormBuilder,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submit handler event', () => {
    component.atmForm.controls.amount.setValue('1000');
    component.atmForm.controls.denomination.setValue('100');
    spyOn(component.submitHandler, 'emit');
    component.onSubmit();
    expect(component.submitHandler.emit).toHaveBeenCalledWith(
      { amount: '1000', note: '100' }
    );
  });

});

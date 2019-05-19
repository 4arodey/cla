import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { validation } from '../../validation/validation.variables';
import { RegistrationService } from '../../services/registration.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  private registerForm: FormGroup;
  private submitted = false;
  private isRegistered = false;
  private minPasswordLength = validation.minPasswordLength;

  private formSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private registrationService: RegistrationService
  ) {
  }

  ngOnInit() {
    this.initRegisterForm();
  }
  public get formControl() {
    return this.registerForm.controls;
  }

  public initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.minPasswordLength)]]
    });
  }

  public onSubmit() {
    if (this.formControl.email.touched) {
      this.isRegistered = true;
    }

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.registrationService.postData(this.registerForm);
  }

  public ngOnDestroy() {
    this.unsubscribe();
  }

  private unsubscribe() {
    if (!this.formSubscription) {
      return;
    }

    this.formSubscription.unsubscribe();
  }

  public get isSuccessRegistered() {
    return !this.isRegistered;
  }

  public get hasEmailErrors() {
    return this.submitted || this.formControl.email.errors && this.formControl.email.touched;
  }

  public get hasPasswordErrors() {
    return this.submitted || this.formControl.password.errors && this.formControl.password.touched;
  }

  public get hasFirstNameErrors() {
    return this.submitted || this.formControl.firstname.errors && this.formControl.firstname.touched;
  }

  public get hasLastNameErrors() {
    return this.submitted || this.formControl.lastname.errors && this.formControl.lastname.touched;
  }
}


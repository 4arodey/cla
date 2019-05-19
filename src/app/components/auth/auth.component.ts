import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {validation} from '../../validation/validation.variables';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  private registerForm: FormGroup;
  private submitted = false;
  private isRegistered = false;

  private formSubscription: Subscription;
  private minPasswordLength = validation.minPasswordLength;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.initLoginForm();
  }

  public initLoginForm() {
    this.registerForm = this.formBuilder.group({
      email: ['korol4arodey@gmail.com', [Validators.required, Validators.email]],
      password: ['9038ffff', [Validators.required, Validators.minLength(this.minPasswordLength)]]
    });
  }

  public get formControl() {
    return this.registerForm.controls;
  }

  public onSubmit() {
    this.isRegistered = true;
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.postUser(this.registerForm);

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

  public hasControlErrors(controlName): boolean {
    return this.submitted || this.formControl[controlName].errors && this.formControl[controlName].touched;
  }

}


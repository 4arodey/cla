import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private formSubscription: Subscription;

  constructor(
    private httpClient: HttpClient
  ) {
  }
  public postData(registerForm) {
    this.formSubscription = this
      .httpClient.post(`http://localhost:3012/api/v1/users`,
        {
          email: registerForm.value.email,
          password: registerForm.value.password,
          firstname: registerForm.value.firstname,
          lastname: registerForm.value.lastname
        })
      .subscribe(data => {
        console.log(data);
      });
  }

}

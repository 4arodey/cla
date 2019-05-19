import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:3012/api/v1';

  constructor(private httpClient: HttpClient) {}

  get_users() {
    return this.httpClient.get(this.baseUrl + '/users');
  }
  // get_families() {
  //   return this.httpClient.get(this.baseUrl + '/families');
  // }
  // get_locations() {
  //   return this.httpClient.get(this.baseUrl + '/locations');
  // }
  // get_transactions() {
  //   return this.httpClient.get(this.baseUrl + '/families');
  // }

}

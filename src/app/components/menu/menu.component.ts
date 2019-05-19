import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public token = localStorage.getItem('token');
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  public logOut(key) {
    this.authService.deleteToken(key);
    this.router.navigate(['/login']);
  }

}

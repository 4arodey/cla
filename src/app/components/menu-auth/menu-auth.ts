import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-auth',
  templateUrl: './menu-auth.html',
  styleUrls: ['./menu-auth.scss']
})
export class MenuAuth {
  @Input() items = [];
  @Input() links = [];
  @Input() click = [];
}

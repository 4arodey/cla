import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent {

  @Input() items = [];
  @Input() links = [];
  @Input() icons = [];
  isActive:boolean = false;

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent {
  @Input() title = 'Menu';
  @Input() items = [];
  @Input() links = [];

}

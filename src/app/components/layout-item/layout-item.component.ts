import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-item',
  templateUrl: './layout-item.component.html',
  styleUrls: ['./layout-item.component.scss']
})
export class LayoutItemComponent {
  @Input() paddingTop = false;
  @Input() paddingBottom = false;
  @Input() paddingLeft = false;
  @Input() paddingRight = false;
}

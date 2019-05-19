import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() src: string;
  @Input() alt = '';
  @Input() width: string;
  @Input() height: string;
  @Input() isZoom = false;
  @Input() isBorder = true;
  @Input() isRound = false;
}

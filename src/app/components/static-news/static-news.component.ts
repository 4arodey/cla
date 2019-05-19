import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-static-news',
  templateUrl: './static-news.component.html',
  styleUrls: ['./static-news.component.scss']
})
export class StaticNewsComponent {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() isBorder = true;
}

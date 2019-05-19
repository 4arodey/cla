import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-news',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
}

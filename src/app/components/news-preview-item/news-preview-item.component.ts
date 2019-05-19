import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-news-preview-item',
  templateUrl: './news-preview-item.component.html',
  styleUrls: ['./news-preview-item.component.scss']
})
export class NewsPreviewItemComponent {
  @Input() title = [];
  @Input() imageSrc = [];
  @Input() text = [];
  @Input() link = [];

}

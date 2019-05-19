import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-reviews-item',
  templateUrl: './reviews-item.component.html',
  styleUrls: ['./reviews-item.component.scss']
})
export class ReviewsItemComponent {

  @Input() title = [];
  @Input() image_src = [];
  @Input() text = [];
  @Input() link = [];

}

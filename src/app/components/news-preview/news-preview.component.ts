import { Component } from '@angular/core';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})
export class NewsPreviewComponent {
  title: object = [
    '1',
    '1',
    '2'
  ];
  text: object = [
    'text1',
    'text1',
    'text2'
  ];
  imageSrc: object = [
    'https://res.cloudinary.com/dsocr550v/image/upload/c_scale,h_250/v1555252731/6_pme0lf.png',
    'https://res.cloudinary.com/dsocr550v/image/upload/c_scale,h_250/v1555252731/6_pme0lf.png',
    'https://res.cloudinary.com/dsocr550v/image/upload/c_scale,h_250/v1555252731/6_pme0lf.png'
  ];
}

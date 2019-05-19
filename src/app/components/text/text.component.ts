import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {

  @Input() text:string = '';
  @Input() paddingTop = false;
  @Input() paddingBottom = false;

}

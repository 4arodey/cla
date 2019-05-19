import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.scss']
})
export class ResponseFormComponent {
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() text: string;
  @Input() routeLink: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.scss'
})
export class DataCardComponent {
  @Input() title: string = "";
  @Input() value: string = "";
  @Input() srcIcon: string = "";
  @Input() altIcon: string = "";
  @Input() hexBgColor: string = "";

}

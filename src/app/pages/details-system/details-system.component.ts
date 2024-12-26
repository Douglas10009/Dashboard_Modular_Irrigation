import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataCardComponent } from '../../components/data-card/data-card.component';

@Component({
  selector: 'app-details-system',
  standalone: true,
  imports: [DataCardComponent],
  templateUrl: './details-system.component.html',
  styleUrl: './details-system.component.scss'
})
export class DetailsSystemComponent {
  device = this.activatedRoute.snapshot.params['device'];

  constructor (private activatedRoute: ActivatedRoute) {}

  valueHuminity:string = '10';
  valueTemperature:string = '10';
  valueLuminocity:string = '10';
  valueBatteryCharge:string = '10';
  isBatteryCharging:string = '10';
}

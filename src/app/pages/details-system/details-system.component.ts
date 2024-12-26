import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemCardComponent } from '../../components/system-card/system-card.component';

@Component({
  selector: 'app-details-system',
  standalone: true,
  imports: [SystemCardComponent],
  templateUrl: './details-system.component.html',
  styleUrl: './details-system.component.scss'
})
export class DetailsSystemComponent {
  device = this.activatedRoute.snapshot.params['device'];

  constructor (private activatedRoute: ActivatedRoute) {}
}

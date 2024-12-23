import { Component, Input } from '@angular/core';
import { DataCardComponent } from '../../components/data-card/data-card.component';
import { DataService } from '../../services/data.service';
import { dataResults } from '../../models/dataResult';
import { SystemCardComponent } from '../../components/system-card/system-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SystemCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // Fazer isso com os devices únicos que são recebidos da API
  @Input() deviceNumber1 = "86357604940642";
  @Input() deviceNumber2 = "2060";
  @Input() deviceNumber3 = "";

}

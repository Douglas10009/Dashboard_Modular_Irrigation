import { Component, Input } from '@angular/core';
import { SystemCardComponent } from '../../components/system-card/system-card.component';
import { PopupComponent } from '../../components/popup/popup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SystemCardComponent, PopupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // Fazer isso com os devices únicos que são recebidos da API
  @Input() deviceNumber1 = "86357604940642";
  @Input() deviceNumber2 = "2060";
  @Input() deviceNumber3 = "";

}

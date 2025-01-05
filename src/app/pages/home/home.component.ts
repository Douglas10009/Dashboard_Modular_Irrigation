import { Component, Input } from '@angular/core';
import { SystemCardComponent } from '../../components/system-card/system-card.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { DevicesService } from '../../services/devices.service';
import { devicesResults } from '../../models/devicesResults';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SystemCardComponent, PopupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // Fazer isso com os devices únicos que são recebidos da API

  devices: devicesResults[] = [];

  constructor (private devicesService: DevicesService) {}


  ngOnInit() {
    this.devicesService.getData().subscribe((devices) => {
      this.devices = devices;
    });
  }

}

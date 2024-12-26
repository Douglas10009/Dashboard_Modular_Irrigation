import { Component, Input } from '@angular/core';
import { dataResults } from '../../models/dataResult';
import { DataService } from '../../services/data.service';
import { DataCardComponent } from '../data-card/data-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-card',
  standalone: true,
  imports: [DataCardComponent],
  templateUrl: './system-card.component.html',
  styleUrl: './system-card.component.scss',
})
export class SystemCardComponent {
  data!: dataResults[];

  usingAI:boolean = false;

  @Input() device!: string;
  apiDevice!: string;

  id!: number;
  createdAt!: string;
  valueHuminity!: string;
  valueTemperature!: string;
  valueLuminocity!: string;
  valueBatteryCharge!: string;
  statusBattery!: number;
  isBatteryCharging!: string;

  constructor(private dataService: DataService, private router:Router) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      // Percorrer por todos os dados da API
      data.forEach((eachData) => {

        // Somente pega os dados do dispositivo daquele sistema específico
        if (eachData.dispositivo == this.device) {
          this.id = eachData.id;
          this.createdAt = eachData.createdAt;
          this.createdAt = new Date(eachData.createdAt).toLocaleDateString(
            'pt-BR'
          );
          this.valueHuminity = eachData.umidade;
          this.valueTemperature = eachData.temperatura;
          this.valueLuminocity = eachData.luminosidade;
          this.valueBatteryCharge = eachData.cargaBateria + '%';
          this.statusBattery = parseInt(eachData.statusBateria);
          this.parseStatusBattery();
        }
      });
    });
  }

  // TODO: Implemntar a função de enviar SMS
  sendSMS() {
    console.log('SMS enviado');
  }

  useAI(){
    this.usingAI = !this.usingAI;
  }

  goToDetails(device: string) {
    alert('Go to details' + device);
    this.router.navigate(['/details', device]);
  }

  async parseStatusBattery() {
    if (this.statusBattery == 1) {
      this.isBatteryCharging = 'Charging';
    } else if (this.statusBattery == 0) {
      this.isBatteryCharging = 'Not Charging';
    }
  }
}

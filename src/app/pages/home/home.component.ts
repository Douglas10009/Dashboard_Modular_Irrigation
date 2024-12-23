import { Component } from '@angular/core';
import { DataCardComponent } from '../../components/data-card/data-card.component';
import { DataService } from '../../services/data.service';
import { dataResults } from '../../models/dataResult';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DataCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data!: dataResults[];

  device!: string;
  createdAt!: string;
  valueHuminity!: string;
  valueTemperature!: string;
  valueLuminocity!: string;
  valueBatteryCharge!: string;
  statusBattery!: number;
  isBatteryCharging!: string;



  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data)=> {
      const lastIndex = data.length - 1;

      this.device = data[lastIndex].dispositivo;
      this.createdAt = data[lastIndex].createdAt;
      this.createdAt = new Date(data[lastIndex].createdAt).toLocaleDateString('pt-BR');
      this.valueHuminity = data[lastIndex].umidade;
      this.valueTemperature = data[lastIndex].temperatura;
      this.valueLuminocity = data[lastIndex].luminosidade;
      this.valueBatteryCharge = data[lastIndex].cargaBateria + "%";
      this.statusBattery = parseInt(data[lastIndex].statusBateria);

      if (this.statusBattery == 1) {
        this.isBatteryCharging = "Charging";
      } else if (this.statusBattery == 0) {
        this.isBatteryCharging = "Not Charging";
      }
    })
  }

  sendSMS(){
    console.log("SMS enviado");
  }
}

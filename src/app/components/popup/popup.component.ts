import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [MatDialogModule],
  selector: 'app-popup',
  template: ` <button (click)="openPopup()">Open Popup</button>`,
})
export class PopupComponent {
  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  place: Place;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  bookPlace(): void {
    this.modalController.dismiss('nekaj');
  }

  cancel(): void {
    this.modalController.dismiss();
  }
}

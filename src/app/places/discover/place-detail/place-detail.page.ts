import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place?: Place;

  constructor(
    private placesService: PlacesService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.paramMap;

    if (params.has('placeId')) {
      this.place = this.placesService.getPlace(params.get('placeId'));
    }

    if (!this.place) {
      this.navController.navigateBack('/places');
    }
  }

  onBookPlace(): void {
    this.modalController
      .create({
        component: CreateBookingComponent,
        componentProps: {
          place: this.place,
        },
      })
      .then((modal) => {
        modal.present();

        modal.onWillDismiss().then(console.log);
      });
  }
}

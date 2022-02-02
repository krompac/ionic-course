import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offer?: Place;

  constructor(
    private navController: NavController,
    private placesService: PlacesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    if (paramMap.has('placeId')) {
      const placeId = paramMap.get('placeId');
      this.offer = this.placesService.getPlace(placeId);
    }

    if (!this.offer) {
      this.navController.navigateBack('/places/tabs/offers');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  offer?: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private navController: NavController
  ) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.paramMap;

    if (params.has('placeId')) {
      this.offer = this.placesService.getPlace(params.get('placeId'));
    }

    if (!this.offer) {
      this.navController.navigateBack('/places/tabs/offers');
    }
  }
}

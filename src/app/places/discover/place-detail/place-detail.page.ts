import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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
    private navController: NavController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.has('placeId')) {
        this.place = this.placesService.getPlace(params.get('placeId'));
      }

      if (!this.place) {
        this.navController.navigateBack('/places');
      }
    });
  }

  onBookPlace(): void {
    this.navController.navigateBack('/places');
  }
}

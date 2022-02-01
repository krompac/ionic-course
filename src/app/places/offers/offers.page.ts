import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {
  offers: Place[] = [];

  private sub: Subscription = new Subscription();

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.sub.add(this.placesService.places.subscribe((places) => (this.offers = places)));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

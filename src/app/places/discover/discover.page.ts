import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  places: Place[] = [];

  private sub: Subscription = new Subscription();

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.sub.add(this.placesService.places.subscribe((places) => (this.places = [...places])));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

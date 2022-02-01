import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _placesSubject: BehaviorSubject<Place[]> = new BehaviorSubject([
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg',
      149.99
    ),
    new Place(
      'p2',
      'LAmour Toujour',
      'Romantic place in Paris',
      'https://lp-cms-production.imgix.net/2021-04/GettyRF_486584756.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Place',
      'Not your average city trip',
      'https://www.worldatlas.com/r/w1200/upload/c8/d7/68/shutterstock-121582312.jpg',
      99.99
    ),
  ]);

  constructor() {}

  public get places(): BehaviorSubject<Place[]> {
    return this._placesSubject;
  }

  getPlace(placeId: string): Place | undefined {
    return this._placesSubject.value.find((place) => place.id === placeId);
  }
}

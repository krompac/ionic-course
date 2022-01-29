import { Injectable } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipesSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject([
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.foodiecrush.com/wp-content/uploads/2018/10/Pork-Schnitzel-foodiecrush.com-016.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.giallozafferano.com/images/228-22832/spaghetti-with-tomato-sauce_1200x800.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
  ]);

  constructor(private alertController: AlertController) {}

  addNew(recipe: Recipe): void {
    this.recipesSubject.next([...this.recipesSubject.value, recipe]);
  }

  getRecipe(recipeId: string): Recipe | undefined {
    return this.recipesSubject.value.find((recipe) => recipe.id === recipeId);
  }

  removeRecipe(recipeId: string): void {
    const confirmButton: AlertButton = {
      text: 'Confirm',
      handler: () => this.recipesSubject.next(this.recipesSubject.value.filter((recipe) => recipe.id !== recipeId)),
    };

    this.alertController
      .create({
        header: 'Delete recipe?',
        message: 'Do you really want to delete the recipe?',
        buttons: ['Cancel', confirmButton],
      })
      .then((alert) => alert.present());
  }
}

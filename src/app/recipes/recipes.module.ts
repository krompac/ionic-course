import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';
import { RecipeDetailPageModule } from './recipe-detail/recipe-detail.module';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecipesPageRoutingModule, RecipeDetailPageModule],
  declarations: [RecipesPage, RecipeItemComponent],
  exports: [RecipeDetailPageModule],
})
export class RecipesPageModule {}

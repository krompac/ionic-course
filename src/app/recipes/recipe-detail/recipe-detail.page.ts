import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe?: Recipe;

  constructor(private recipeService: RecipesService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.has('recipeId')) {
        this.recipe = this.recipeService.getRecipe(params.get('recipeId'));
      }

      if (!this.recipe) {
        this.router.navigate(['/recipes']);
      }
    });
  }
}

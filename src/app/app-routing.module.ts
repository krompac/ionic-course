import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: () => import('./recipes/recipes-routing.module').then((m) => m.RecipesPageRoutingModule),
      },
      {
        path: ':recipeId',
        loadChildren: () =>
          import('./recipes/recipe-detail/recipe-detail.module').then((m) => m.RecipeDetailPageModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'recipes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

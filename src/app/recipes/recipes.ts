import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../services/recipe-service';
@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
  providers: []
})
export class Recipes {
  selectedRecipe: Recipe;

  constructor(){
      // this.recipeService.recipeSelected.subscribe(
      //   (recipe: Recipe) => {
      //     this.selectedRecipe = recipe;
      //   }
      // )
  }

  getSelectedRecipe(recipe: Recipe){       
    this.selectedRecipe = recipe;
  }

}

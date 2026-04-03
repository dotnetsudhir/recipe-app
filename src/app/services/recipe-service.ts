import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Observable, of, Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService){

  }

  recipes: Recipe[] =  [
    new Recipe('Test Recipe 1', 
      'This is a test', 
      'https://images.immediate.co.uk/production/volatile/sites/2/2025/11/Hasselback-TartifletteInsidepreview-641e56f-018382c.jpg?quality=90&resize=708,643', 
      [
        new Ingredient('Bread',2),
        new Ingredient('Butter', 1)
      ]),
      new Recipe('Test recipe 2', 
        'This also is a test', 
      'https://hips.hearstapps.com/hmg-prod/images/chicken-quesadillas-index-668eeabf1a2c7.jpg?crop=0.8885870590454631xw:1xh;center,top&resize=1200:*', 
      [new Ingredient('Salt', 2),
        new Ingredient('Pepper',1)
      ])
  ];

  loadRecipes(): Observable<Recipe[]>{
    return of(this.recipes.slice());
  }

  getRecipes(): Recipe[]{
    return this.recipes.slice();
  }
  
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  getRecipeById(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}

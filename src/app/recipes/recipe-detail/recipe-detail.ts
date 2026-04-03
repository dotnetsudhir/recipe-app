import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  recipe: Recipe;
  isOpen: boolean = false;
  id: number;
  constructor(
      private recipeService: RecipeService,
      private route: ActivatedRoute,
      private router: Router){

  }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = + params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    )
  }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log('clicked', this.isOpen);
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
      this.router.navigate(['edit'], {relativeTo: this.route})
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
})
export class RecipeItem {

  @Input() recipe: Recipe;
  //@Output() recipeSelected = new EventEmitter<void>();
  //@Output() recipeselected = new EventEmitter<Recipe>();
  @Input() index: number;
  constructor(private recipeService: RecipeService,
      private route: ActivatedRoute)
      {  }

  
  // onSelected(){        
  //   this.recipeService.recipeSelected.emit(this.recipe);
    //console.log('item ' + this.recipe.name);
    //this.recipeSelected.emit();
  // }
  

}

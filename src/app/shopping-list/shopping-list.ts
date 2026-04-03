import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList implements OnInit, OnDestroy {
 
  ingredients: Ingredient[];
  private idChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(){
    this.loadIngredients();
   this.idChangeSub = this.shoppingListService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  loadIngredients(){
    this.shoppingListService.loadIngredients()
      .subscribe( i => this.ingredients = i);
        
  }
  
    addIngredient(ingredient: Ingredient){
      this.shoppingListService.addIngredient(ingredient);    
  }

  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }

  onEditItem(index : number){
    this.shoppingListService.startEditing.next(index)
  }

  
}

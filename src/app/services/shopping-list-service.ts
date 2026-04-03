import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();
  //ingredients: Ingredient[]=[];
   ingredients = [
    new Ingredient('Apples', 10),
    new Ingredient('Oranges', 20)
  ];
  
  loadIngredients(): Observable<Ingredient[]>{
    return of(this.ingredients);
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  clearData(){
    this.ingredients = [];
    this.ingredientChanged.next(this.ingredients);
    console.log(this.ingredients.length);
  }
  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number): Ingredient{
    return this.ingredients[index];
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  
}

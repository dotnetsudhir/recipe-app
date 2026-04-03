import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list-service';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.css',
})
export class ShoppingEdit implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;
  constructor(private shoppingListService: ShoppingListService){
    
  }

  ngOnInit(){
   this.subscription = this.shoppingListService.startEditing.subscribe(
    (index: number) => {
      this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
        this.shoppingListService.loadIngredients();

    }

   );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    // const ingName = this.nameInputRef.nativeElement.value;
    // if(ingName == "") return;
    
    // const ingAmt = this.amountInputRef.nativeElement.value;
     const newIngredient = new Ingredient(value.name, value.amount);
     if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
     } else {
       this.shoppingListService.addIngredient(newIngredient);
     }
     this.editMode = false;
     form.reset();
    
    // this.nameInputRef.nativeElement.value = '';
    // this.amountInputRef.nativeElement.value = '';
    //this.ingredientAdded.emit(newIngredient);
  }
  // clearData(){
  //   this.slForm.reset();
  //   this.editMode = false;
    //this.shoppingListService.clearData();
    // this.nameInputRef.nativeElement.value = '';
    // this.amountInputRef.nativeElement.value = '';
  //}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { RecipeStart } from './recipes/recipe-start/recipe-start';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';
import { RecipeEdit } from './recipes/recipe-edit/recipe-edit';
import { RecipesResolverService } from './recipes/recipes-resolver-service';
import { AuthComponent } from './auth-component/auth-component';

const appRoutes: Routes =[
  {path:'', redirectTo:'/recipes', pathMatch: 'full'},
  {path: 'recipes', component: Recipes, children:[
    {path:'', component:RecipeStart},
    {path:'new', component: RecipeEdit},    
    {path:':id', component: RecipeDetail, resolve:[RecipesResolverService]},
    {path:':id/edit', component: RecipeEdit, resolve:[RecipesResolverService]}
  ]},
  {path: 'shopping-list', component: ShoppingList},
  {path:'auth', component:AuthComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }

import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { Recipes } from './recipes/recipes';
import { RecipeList } from './recipes/recipe-list/recipe-list';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';
import { RecipeItem } from './recipes/recipe-list/recipe-item/recipe-item';
import { ShoppingList } from './shopping-list/shopping-list';
import { ShoppingEdit } from './shopping-list/shopping-edit/shopping-edit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown-directive';
import { ShoppingListService } from './services/shopping-list-service';
import { AppRoutingModule } from './app-routing-module';
import { RecipeStart } from './recipes/recipe-start/recipe-start';
import { RecipeEdit } from './recipes/recipe-edit/recipe-edit';
import { RecipeService } from './services/recipe-service';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth-component/auth-component';
import { LoadingSpinner } from './shared/loading-spinner/loading-spinner';

@NgModule({
  declarations: [
    App,
    Header,
    Recipes,
    RecipeList,
    RecipeDetail,
    RecipeItem,
    ShoppingList,
    ShoppingEdit,
    DropdownDirective,
    RecipeStart,
    RecipeEdit,
    AuthComponent,
    LoadingSpinner
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  provideBrowserGlobalErrorListeners(),
  ShoppingListService,
  RecipeService
],
  // providers: [
  //   provideBrowserGlobalErrorListeners(),
  //   provideZonelessChangeDetection(),
  //   ShoppingListService,
  //   RecipeService
  // ],
  bootstrap: [App]
})
export class AppModule { }

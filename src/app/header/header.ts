import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
//  @Output() featureSelected = new EventEmitter<string>();
//   onSelect(feature: string){
//     this.featureSelected.emit(feature);
//   }

constructor(private dataStorageService: DataStorageService){

}

  saveData(){
      this.dataStorageService.storeRecipes();
  }

  fetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
}

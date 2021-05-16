import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientName: any = '';
  @Output() newIngredient = new EventEmitter<string>();
  @Output() clearIngredients = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    this.newIngredient.emit(this.ingredientName)
    console.log(this.ingredientName)
    this.ingredientName = '';
  }

  onClearList() {
    this.clearIngredients.emit()
  }

}

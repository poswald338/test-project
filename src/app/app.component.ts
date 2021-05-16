import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  @Input() ingredients = ['eggs'];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient) {
    this.ingredients.push(ingredient);
    return this.ingredients;
  }


  onIngredientsCleared() {
    this.ingredients = [];
  }

  onShow() {
    console.log(this.ingredients);
  }

}

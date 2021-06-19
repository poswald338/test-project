import { Component } from '@angular/core';
import { FlashCardService } from './flash-card.service';
import { FlashCard } from './flashCard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  cardLoaded = false;
  showAnswer = false;
  private loadedCard: FlashCard = null

  constructor (private flashCardService: FlashCardService) {}

  onButtonPressed() {
    debugger
    this.cardLoaded = true;
    this.loadedCard = this.flashCardService.getCard()
    this.showAnswer = false;
  }

  onShowAnswer() {
    this.showAnswer = true;
  }

}

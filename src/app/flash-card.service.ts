import { Injectable } from '@angular/core';
import { FlashCard } from './flashCard.model';

@Injectable({
  providedIn: 'root'
})
export class FlashCardService {

  constructor() { }

  private flashCards: FlashCard[] = [
    new FlashCard(
      'What is the terminal command to generate a new component?',
      'ng generate component OR ng g c'
    ),
    new FlashCard(
      'test question',
      'test answer'
    ),
    new FlashCard(
      "test question 2",
      'test answwer 2'
    ),
    new FlashCard(
      "test question 3",
      'test answwer 3'
    ),
    new FlashCard(
      "test question 4",
      'test answwer 4'
    ),
  ]

  getCard() {
    debugger
    const randomCard = this.flashCards[Math.floor(Math.random() * this.flashCards.length)];
    return randomCard;
  }
}

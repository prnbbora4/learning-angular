import { Component } from "@angular/core";

@Component({
  selector: "hero",
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})

export class Hero {
  public title = 'tutorial-angular';

  handleSubmit = () => {
    console.log('submit');
  }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() nick = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    // alert(`A ${this.nick} le gusta jugar a ${gameName}`)
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: "GTASA"
    },
    {
      id: 2,
      name: "EA FC"
    },
    {
      id: 3,
      name: "R6"
    }
  ]

}

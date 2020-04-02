import { Injectable } from '@angular/core';
import { GameItem } from '../interface/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesListService {



  constructor() {}


  gameList: GameItem[]=[

    {
      id: 1, name: 'Fifa 20', genereId: 1
    },
    {
      id: 2, name: 'Uncharted', genereId: 2
    },
    {

      id: 3, name: 'GTA V', genereId: 3

  },
  {

    id: 4, name: 'Formula 1 2019', genereId: 4

},
{

    id: 5, name: 'VR46', genereId: 5

},

  ];


}

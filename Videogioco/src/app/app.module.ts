import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { RouterModuleComponent } from './router-module/router-module.component';
import { AppRouting } from './app/app-routing.module.ts/app-routing.module.ts.component';
import { LoginComponent } from './component/login/login.component';
import { GameItemComponent } from './components/game-item/game-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameListComponent,
    MenuComponent,
    EditGameComponent,
    GameDetailComponent,
    RouterModuleComponent,
    AppRouting.Module.TsComponent,
    LoginComponent,
    GameItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

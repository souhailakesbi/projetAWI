import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecetteListComponent } from './components/HomePage/recette-list/recette-list.component';
import { CreerFicheComponent } from './components/HomePage/creer-fiche/creer-fiche.component';
import { CreerEtapeComponent } from './components/HomePage/creer-etape/creer-etape.component';
import { MenuComponent } from './components/HomePage/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetteListComponent,
    CreerFicheComponent,
    CreerEtapeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

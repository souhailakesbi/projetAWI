import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecetteListComponent } from './components/HomePage/recette-list/recette-list.component';
import { CreerFicheComponent } from './components/HomePage/creer-fiche/creer-fiche.component';
import { CreerEtapeComponent } from './components/HomePage/creer-etape/creer-etape.component';
import { MenuComponent } from './components/HomePage/menu/menu.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './components/Login/login.component';
import { IngredientsComponent } from './components/HomePage/ingredients/ingredients.component';
import { StockComponent } from './components/HomePage/stock/stock.component';
import { ResponsablesComponent } from './components/HomePage/responsables/responsables.component';
import { AjouterChefComponent } from './components/HomePage/ajouter-chef/ajouter-chef.component';
import { AjouterIngredientComponent } from './components/HomePage/ajouter-ingredient/ajouter-ingredient.component';
import { AjoutStockComponent } from './components/HomePage/ajout-stock/ajout-stock.component';
const AppRoutes : Routes = [
  {path: 'ListeRecettes', component:RecetteListComponent},

  {path: 'ListeRecettes/AjouterRecette', component:CreerFicheComponent},
  {path: 'ListeRecettes/AjouterRecette/AjouterEtape', component:CreerEtapeComponent},
  {path:'', component : LoginComponent},
  {path : 'Ingredients', component : IngredientsComponent},
  {path: 'Stock', component : StockComponent},
  {path: 'Responsables', component: ResponsablesComponent},
  {path : 'AjouterChef' , component : AjouterChefComponent},
  {path: 'Ingredients/AjouterIngredient', component : AjouterIngredientComponent},
  {path: 'Stock/AjouterStock' , component :AjoutStockComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    RecetteListComponent,
    CreerFicheComponent,
    CreerEtapeComponent,
    MenuComponent,
    LoginComponent,
    IngredientsComponent,
    StockComponent,
    ResponsablesComponent,
    AjouterChefComponent,
    AjouterIngredientComponent,
    AjoutStockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, RecetteListComponent,CreerFicheComponent, IngredientsComponent, StockComponent, AjouterChefComponent, AjouterIngredientComponent, AjoutStockComponent
  ]
})

export class AppModule { }

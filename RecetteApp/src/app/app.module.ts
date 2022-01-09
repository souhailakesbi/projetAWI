import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from "../environments/environment";
import {AppComponent} from './app.component';
import {RecetteListComponent} from './components/HomePage/recette-list/recette-list.component';
import {CreerFicheComponent} from './components/HomePage/creer-fiche/creer-fiche.component';
import {CreerEtapeComponent} from './components/HomePage/creer-etape/creer-etape.component';
import {MenuComponent} from './components/HomePage/menu/menu.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './components/Login/login.component';
import {IngredientsComponent} from './components/HomePage/ingredients/ingredients.component';
import {StockComponent} from './components/HomePage/stock/stock.component';
import {ResponsablesComponent} from './components/HomePage/responsables/responsables.component';
import {AjouterChefComponent} from './components/HomePage/ajouter-chef/ajouter-chef.component';
import {AjouterIngredientComponent} from './components/HomePage/ajouter-ingredient/ajouter-ingredient.component';
import {AjoutStockComponent} from './components/HomePage/ajout-stock/ajout-stock.component';
import {DetailsFicheComponent} from './components/HomePage/details-fiche/details-fiche.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {ModificationFicheComponent} from './components/HomePage/modification-fiche/modification-fiche.component';
import {FichePrixComponent} from './components/HomePage/fiche-prix/fiche-prix.component';
import {FicheEtiquetteComponent} from './components/HomePage/fiche-etiquette/fiche-etiquette.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthentificationService} from "./services/authentification/authentification.service";
import { ListeStepComponent } from './components/HomePage/liste-step/liste-step.component';
import {AuthGuardService} from "./services/authentification/auth-guard.service";
import { ModificationEtapeComponent } from './components/HomePage/modification-etape/modification-etape.component';
import { ModifierIngredientComponent } from './components/HomePage/modifier-ingredient/modifier-ingredient.component';
import { ModificationStockComponent } from './components/HomePage/modification-stock/modification-stock.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CoutsComponent } from './components/HomePage/couts/couts.component';

const AppRoutes: Routes = [
  {path: '', redirectTo: 'auth/Login', pathMatch: 'full'},
  {path: 'ListeRecettes', canActivate:[AuthGuardService], component: RecetteListComponent},
  {path: 'AjouterRecette',canActivate:[AuthGuardService], component: CreerFicheComponent},
  {path: 'AjouterEtape/:id', canActivate:[AuthGuardService],component: CreerEtapeComponent},
  {path: 'Fiches/:id',canActivate:[AuthGuardService], component: ModificationEtapeComponent},
  {path: 'Modification/:id',canActivate:[AuthGuardService], component: ModificationFicheComponent},
  {path: 'Fiches/couts/:id',canActivate:[AuthGuardService], component: FichePrixComponent},
  {path: 'auth/Login', component: LoginComponent},
  {path: 'Ingredients',canActivate:[AuthGuardService], component: IngredientsComponent},
  {path: 'Stock',canActivate:[AuthGuardService], component: StockComponent},
  {path: 'Etiquette/:id',canActivate:[AuthGuardService], component: FicheEtiquetteComponent},
  {path: 'Responsables',canActivate:[AuthGuardService], component: ResponsablesComponent},
  {path: 'AjouterChef',canActivate:[AuthGuardService], component: AjouterChefComponent},
  {path: 'AjouterIngredient',canActivate:[AuthGuardService], component: AjouterIngredientComponent},
  {path: 'AjouterStock',canActivate:[AuthGuardService], component: AjoutStockComponent},
  {path: 'ModifierIngredient/:id',canActivate:[AuthGuardService], component: ModifierIngredientComponent},
  {path: 'ListeEtapes/:id',canActivate:[AuthGuardService], component: ListeStepComponent},
  {path: 'ListeEtapes',canActivate:[AuthGuardService], component: ListeStepComponent},
  {path: 'DetailsFiche/:id',canActivate:[AuthGuardService], component: DetailsFicheComponent},
  {path: 'Ingredients/:id',canActivate:[AuthGuardService], component: IngredientsComponent},
  {path: 'Couts',canActivate:[AuthGuardService], component: CoutsComponent},
  {path: 'Couts/:id',canActivate:[AuthGuardService], component: CoutsComponent},


]
@NgModule({
  exports:[RouterModule],
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
    AjoutStockComponent,
    DetailsFicheComponent,
    ModificationFicheComponent,
    FichePrixComponent,
    ListeStepComponent,
    ModificationEtapeComponent,
    FicheEtiquetteComponent,
    ModifierIngredientComponent,
    ModificationStockComponent,
    CoutsComponent,

  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(AppRoutes),
    ReactiveFormsModule,

    FormsModule
  ],
  providers: [
    AuthentificationService
  ],
  bootstrap: [AppComponent, RecetteListComponent, CreerFicheComponent, IngredientsComponent, StockComponent, AjouterChefComponent, AjouterIngredientComponent, AjoutStockComponent
  ]
})

export class AppModule { }

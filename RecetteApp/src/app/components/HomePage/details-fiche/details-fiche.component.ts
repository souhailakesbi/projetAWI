import {Component, Input, OnInit, Output} from '@angular/core';
import Fiche from "../../../models/ficheTechnique/fiche";
import {ActivatedRoute, Router} from "@angular/router";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {IngredientsService} from "../../../services/ingredients.service";
import {Ingredients} from "../../../models/ingredients";
import {CreerEtapeComponent} from "../creer-etape/creer-etape.component";

@Component({
  selector: 'app-details-fiche',
  templateUrl: './details-fiche.component.html',
  styleUrls: ['./details-fiche.component.css']
})
export class DetailsFicheComponent implements OnInit {
  @Input() fiche?:Fiche
  id : string | null;
  ingredientName! : string


  constructor(private ficheService: AjoutFicheService,
              private route : Router,
              private act : ActivatedRoute,
              private ingredientService:IngredientsService) {
    this.id = this.act.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.ficheService.getFicheDoc(this.id).subscribe(fiche =>{
      console.log(fiche);
      this.fiche = fiche;
    });
  }

  /*getIngredient(){
    this.fiche?.listeStep.forEach((step,index)=>{
        this.ingredientService.getIngredientByName(step.listIngredient.at(index).value.ingredient);
      })
  }*/


  print(){
    window.print();
  }

  modifyFiche(){
    if(confirm("Voulez-vous modifier cette fiche ?")){
      this.route.navigate(['/Modification',this.id]).then(res =>{
        console.log('On passe à la modification '+ res);
      })
    }
  }
  deleteFiche(){
    if(confirm("Voulez-vous supprimer cette fiche ?")){
      this.ficheService.delete(this.id).then(res =>{
        console.log('Fiche supprimée ' + res);
      })
      this.route.navigate(['/ListeRecettes']);
    }
  }

  addPrice(){
    if(confirm("Voulez-vous afficher la fiche avec les couts ?")){
      this.route.navigate(['/Fiches/couts',this.id]).then(res =>{
        console.log('Fiche avec couts '+ res);
      })
    }
  }
}

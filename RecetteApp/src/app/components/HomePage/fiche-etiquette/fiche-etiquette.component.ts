import {Component, Input, OnInit} from '@angular/core';
import Fiche from "../../../models/ficheTechnique/fiche";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IngredientsService} from "../../../services/ingredients.service";

@Component({
  selector: 'app-fiche-etiquette',
  templateUrl: './fiche-etiquette.component.html',
  styleUrls: ['./fiche-etiquette.component.css']
})
export class FicheEtiquetteComponent implements OnInit {
  @Input() fiche?:Fiche
  id : string | null;
  ingredientName! : string
  marked = false;
  constructor(private ficheService: AjoutFicheService,
              private route : Router,
              private act : ActivatedRoute) {
    this.id = this.act.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.ficheService.getFicheDoc(this.id).subscribe(fiche =>{
      console.log(fiche);
      this.fiche = fiche;
    });
  }
  print(){
    window.print();
  }

  visibleVente(e: any){
    this.marked= e.target.checked;
  }
}

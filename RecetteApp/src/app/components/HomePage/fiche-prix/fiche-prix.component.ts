import {Component, Input, OnInit} from '@angular/core';
import Fiche from "../../../models/ficheTechnique/fiche";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IngredientsService} from "../../../services/ingredients.service";

@Component({
  selector: 'app-fiche-prix',
  templateUrl: './fiche-prix.component.html',
  styleUrls: ['./fiche-prix.component.css']
})
export class FichePrixComponent implements OnInit {

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

}

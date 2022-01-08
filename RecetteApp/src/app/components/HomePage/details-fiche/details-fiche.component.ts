import {Component, Input, OnInit, Output} from '@angular/core';
import Fiche from "../../../models/ficheTechnique/fiche";
import {ActivatedRoute} from "@angular/router";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";

@Component({
  selector: 'app-details-fiche',
  templateUrl: './details-fiche.component.html',
  styleUrls: ['./details-fiche.component.css']
})
export class DetailsFicheComponent implements OnInit {
  @Input() fiche?:Fiche
  id : string | null;
  constructor(private ficheService: AjoutFicheService,
    private act : ActivatedRoute) {
    this.id = this.act.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.ficheService.getFicheDoc(this.id).subscribe(fiche =>{
      console.log(fiche);
      this.fiche = fiche;
    });
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IngredientsService} from "../../../services/ingredients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Ingredients} from "../../../models/ingredients";

@Component({
  selector: 'app-modifier-ingredient',
  templateUrl: './modifier-ingredient.component.html',
  styleUrls: ['./modifier-ingredient.component.css']
})
export class ModifierIngredientComponent implements OnInit {
  public editForm : FormGroup;
  ingredientRef:any;
  constructor(
    public ingredientService : IngredientsService,
    public formBuilder : FormBuilder,
    public act : ActivatedRoute,
    public router : Router
  ) {
    this.editForm = this.formBuilder.group({
      code: [''],
      libelle: [''],
      unite: [''],
      prix_unitaire: [''],
      categorie: ['']
    })
  }

  ngOnInit(): void {
    const code = this.act.snapshot.paramMap.get('code');
    this.ingredientService.getIngredient(code as string).subscribe(
      res=> {
        this.ingredientRef=res;
        this.editForm = this.formBuilder.group({
          libelle: [this.ingredientRef.libelle],
          unite: [this.ingredientRef.unite],
          prix_unitaire: [this.ingredientRef.prix_unitaire],
          categorie: [this.ingredientRef.categorie]
        })
      }
    )

  }


  onSubmit(){
    const code = this.act.snapshot.paramMap.get('code');
    this.ingredientService.updateIngredient(code as string,this.editForm.value);
    this.router.navigate(['Ingredients'])
  }

}

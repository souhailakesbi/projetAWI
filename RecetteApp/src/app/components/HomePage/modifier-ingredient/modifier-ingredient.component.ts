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
  id:string |null;

  newIngredient! : FormGroup ;

  public currentIngredient!: Ingredients ;
  @Input() ingredient!: Ingredients ;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  constructor(
    public ingredientService : IngredientsService,
    public formBuilder : FormBuilder,
    public act : ActivatedRoute,
    public router : Router,

  ) {
    this.editForm = this.formBuilder.group({
      code: [''],
      libelle: [''],
      unite: [''],
      prix_unitaire: [''],
      categorie: ['']
    })
    this.id= this.act.snapshot.paramMap.get('id'); //ajout

  }

  ngOnInit(): void {
    this.ingredientService.getIngredient(this.id).subscribe(
      res=> {
        this.ingredientRef=res;
        this.editForm = this.formBuilder.group({
          code : [this.ingredientRef.code],
          libelle: [this.ingredientRef.libelle],
          unite: [this.ingredientRef.unite],
          prix_unitaire: [this.ingredientRef.prix_unitaire],
          categorie: [this.ingredientRef.categorie]
        })

      }
    )

  }
  ngOnChanges(): void {
    this.currentIngredient = { ...this.ingredient};
  }

  update(){//ajout
    if(this.id!=null){
      this.ingredientService.getIngredient(this.id).subscribe(d=>{
        this.newIngredient = this.formBuilder.group({
          id : [this.id],
          code :[this.editForm.value.code],
          libelle: [this.editForm.value.libelle],
          unite: [this.editForm.value.unite],
          prix_unitaire: [this.editForm.value.prix_unitaire],
          categorie: [this.editForm.value.categorie]
        })
      });
      this.ingredientService.updateIngredient(this.editForm.value,this.id);
      console.log("modification")

    }
  }

  onSubmit(){
    if (this.id !== null) {//ajout
      this.update();//ajout
      this.router.navigate(['/Ingredients']);
      console.log("Ingredient bien modifié");
    }


  }

}

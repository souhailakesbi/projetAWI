import { Component, OnInit,EventEmitter,Input, Output } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StockService} from "../../../services/stock/stock.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Ingredients} from "../../../models/ingredients";
import {Stock} from "../../../models/stock/stock";
import {IngredientsService} from "../../../services/ingredients.service";
@Component({
  selector: 'app-modification-stock',
  templateUrl: './modification-stock.component.html',
  styleUrls: ['./modification-stock.component.css']
})
export class ModificationStockComponent implements OnInit {

  public editForm : FormGroup;
  stockRef:any;
  id:string |null;

  newStock! : FormGroup ;
  public currentStock!: Stock ;
  @Input() stock!: Stock ;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();


  constructor(
    public stockService : StockService,
    public formBuilder : FormBuilder,
    public act : ActivatedRoute,
    public router : Router,

  ) {
    this.editForm = this.formBuilder.group({
      ingredient_stock: [''],
      quantite: [''],
      prix_total: ['']
    })
    this.id= this.act.snapshot.paramMap.get('id'); //ajout

  }

  ngOnInit(): void {
    this.stockService.getStock(this.id).subscribe(
      res=> {
        this.stockRef=res;
        this.editForm = this.formBuilder.group({
          ingredient_stock : [this.stockRef.ingredient_stock],
          quantite: [this.stockRef.quantite],
          prix_total: [this.stockRef.prix_total]
        })

      }
    )

  }
  ngOnChanges(): void {
    this.currentStock = { ...this.stock};
  }

  update(){//ajout
    if(this.id!=null){
      this.stockService.getStock(this.id).subscribe(d=>{
        this.newStock = this.formBuilder.group({
          id : [this.id],
          ingredient_stock :[this.editForm.value.ingredient_stock],
          quantite: [this.editForm.value.quantite],
          prix_total: [this.editForm.value.prix_total]
        })
      });
      this.stockService.updateStock(this.editForm.value,this.id);
      console.log("modification stock")

    }
  }

  onSubmit(){
    if (this.id !== null) {//ajout
      this.update();//ajout
      this.router.navigate(['/Stock']);
      console.log("Stock bien modifié");
    }


  }

}

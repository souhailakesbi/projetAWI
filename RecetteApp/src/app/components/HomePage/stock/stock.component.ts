import { Component, OnInit } from '@angular/core';
import { StockService } from '../../../services/stock/stock.service';
import { map } from 'rxjs/operators';
import {Stock} from "../../../models/stock/stock";
import {IngredientsService} from "../../../services/ingredients.service";
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  Stock!: Stock[];
  constructor(private stockService : StockService) { }

  ngOnInit() {
    this.stockService.getStockList().subscribe(res =>{
      this.Stock = res.map(c => {
        return{
          id: c.payload.doc.id, ...c.payload.doc.data() as {}
        } as Stock;
      })
    });
  }

  removeStock(stock : Stock){
    if(confirm("are you sure to delete  "+ stock.id)){
      this.stockService.deleteStock(stock.id);
      console.log("Ingredient bien supprimé")
    }
    else{
      console.error();
    }
  }
}

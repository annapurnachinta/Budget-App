import { Component, OnInit } from '@angular/core';
import { BudgetItem } from './../../shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  budgetItem: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItem.push(newItem)
    // if(newItem.currency === 'Income'){
    //   this.totalBudget += newItem.amount
    // }else{
    //   this.totalBudget -= newItem.amount
    // }


    newItem.currency === 'Income'? this.totalBudget += newItem.amount : this.totalBudget -= newItem.amount
    
  }

}

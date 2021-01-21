import { Component, OnInit } from '@angular/core';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { UpdateEvent } from './../budget-item-list/budget-item-list.component';

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

  deleteItem(item: BudgetItem){
    let index = this.budgetItem.indexOf(item)
    this.budgetItem.splice(index, 1)
    item.currency !== 'Income'? this.totalBudget += item.amount : this.totalBudget -= item.amount
  }

  updateItem(updateEvent: UpdateEvent){
    this.budgetItem[this.budgetItem.indexOf(updateEvent.old)] = updateEvent.new;

    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount
  }

}

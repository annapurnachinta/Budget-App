import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItem: BudgetItem[]; 
  Income: string;
  Expenses: string;

  constructor() { }

  ngOnInit(): void {
  }

}

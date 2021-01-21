import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() deleteButton: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteButton.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

}

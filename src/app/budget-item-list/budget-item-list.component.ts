import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItem: BudgetItem[]; 
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Ondelete(item: BudgetItem){
    this.delete.emit(item)
  }

  onCardClicked(item: BudgetItem){
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      // check if result has a value
      if (result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }
}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
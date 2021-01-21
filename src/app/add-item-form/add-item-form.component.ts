import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  @Input() item:BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('','', null);
    }
  }

  onSubmit(form: NgForm){
    var selectBox = document.querySelectorAll(".border");
    selectBox.forEach(i => i.style.border = '1px solid #e7e7e7')
    this.formSubmit.emit(form.value)
    form.reset()
  }

  changeFunc(event) {
    var selectBox = document.querySelectorAll(".border");
    var selectedValue = event.target.value
    var selectBtn = document.getElementById("btn");

    if(selectedValue == "Income"){
      selectBox.forEach(i => i.style.border = '1px solid #28B9B5')
      selectBtn.style.color = '#28B9B5'
    }else if(selectedValue == "Expenses"){
      selectBox.forEach(i => i.style.border = '1px solid #FF5049')
      selectBtn.style.color = '#FF5049'
    }else{
      selectBox.forEach(i => i.style.border = '1px solid #e7e7e7')
    }

   }
}
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'bnp-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() tarea: TareaModel;
  @Output() evChange: EventEmitter<boolean>;
  @Output() evDelete: EventEmitter<void>;
  fcCompleted: FormControl;

  constructor() {
    this.evChange = new EventEmitter();
    this.evDelete = new EventEmitter();
  }

  ngOnInit(): void {
    this.fcCompleted = new FormControl();
    this.fcCompleted.setValue(this.tarea.isCompleted);
    this.fcCompleted.valueChanges.subscribe(
      () => this.evChange.next(this.fcCompleted.value)
    );
  }

  onSendDelete() {
    this.evDelete.next();
  }
}

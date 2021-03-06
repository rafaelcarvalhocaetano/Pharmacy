import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ifarm-button-selection',
  templateUrl: './button-selection.component.html',
  styleUrls: ['./button-selection.component.scss']
})
export class ButtonSelectionComponent {

  @Input() public icon: string;
  @Input() public select: boolean;
  @Output() public onClick = new EventEmitter<any>();

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-io',
  standalone: true,
  imports: [],
  templateUrl: './io.component.html',
  styleUrl: './io.component.css',
})
export class IoComponent {
  @Input() color = '';
  @Output() colorChange = new EventEmitter<string>();

  changeColor() {
    this.colorChange.emit('pink');
  }
}

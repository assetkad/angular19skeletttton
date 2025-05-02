import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {
  @Input() label: string = 'Click me';
  @Input() disabled: boolean = false;
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'danger' = 'primary';

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      console.log('Button clicked!');
      this.clicked.emit();
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  imports: [],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css',
})
export class SimpleComponent {
  isMessage = false;
  color = 'blue';
  message = '';

  /* We don't test private functions directly only the result when
 they're called by a public function */
  private getNewMessage() {
    return 'I am the new message';
  }

  showMessage() {
    this.message = this.getNewMessage();
    this.isMessage = true;
    this.color = 'red';
  }
}

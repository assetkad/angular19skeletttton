import { Component, inject } from '@angular/core';
import { MySuperService } from './my-super.service';

@Component({
  selector: 'app-another',
  standalone: true,
  imports: [],
  templateUrl: './another.component.html',
  styleUrl: './another.component.css',
})
export class AnotherComponent {
  mySuperService = inject(MySuperService);
  message = '';
  showMessage() {
    this.message = this.mySuperService.getMessage();
  }
}

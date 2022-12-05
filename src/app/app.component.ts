import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormComponent } from './form/form.component';

@Component({
  imports: [CommonModule, FormComponent],
  standalone: true,
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'intro-component-with-sign-up-form';
}

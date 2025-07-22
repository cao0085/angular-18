import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer>© 2025 Your Company</footer>`,
  styles: [`
    footer {
      padding: 12px;
    }
  `]
})
export class FooterComponent {}

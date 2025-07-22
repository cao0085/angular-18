import { Component, Injectable, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  roles$ = signal<Set<string>>(new Set(['USER']));   // 或 Observable
}

@Component({
  selector: 'app-side-panel',
  imports:[CommonModule,RouterLink],
  standalone: true,
  templateUrl: './side-panel.component.html'
})
export class SidePanelComponent {
  menuItems = [
    { title: 'Home',    route: '/',       roles: ['USER','ADMIN'] },
    { title: 'Admin',   route: '/admin',  roles: ['ADMIN'] },
    { title: 'Form',   route: '/form',  roles: ['USER','ADMIN'] }
  ];

  constructor(private auth: AuthService) {}
  visibleItems() {
    const roleSet = this.auth.roles$();
    return this.menuItems.filter(i =>
      i.roles.some(r => roleSet.has(r))
    );
  }
}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Clients', url: '/clients', icon: 'people' },
    { title: 'Products', url: '/products', icon: 'bag-handle' },
    { title: 'Orders', url: '/folder/Orders', icon: 'cart' },
    { title: 'Details', url: '/folder/Details', icon: 'receipt' },
    { title: 'Canceled', url: '/folder/Canceled', icon: 'trash' },
    { title: 'Archived', url: '/folder/Archives', icon: 'archive' },
  ];
  
  constructor() {}
}

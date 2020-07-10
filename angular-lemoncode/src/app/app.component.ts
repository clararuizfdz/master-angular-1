import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lemoncode';
  precio = 120;
  iva = 24;

  constructor() {
    setTimeout(() => {
      this.precio = 234;
    }, 3000);
  }
  precioTotal = () => {
    return this.precio + this.iva;
  };

  cambiarPrecio = (event: KeyboardEvent) => {
    console.log(event);
    const target = event.target as HTMLInputElement;
    this.precio = +target.value;
  }
}

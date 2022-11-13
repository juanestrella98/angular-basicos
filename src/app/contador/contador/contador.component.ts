import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <p>{{ titulo }}</p>
    <h3>
      la base es <strong>{{ base }}</strong>
    </h3>
    <button (click)="acumular(-base)">-{{ base }}</button>
    <span>{{ contador }}</span>
    <button (click)="acumular(base)">+{{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador APP';
  contador: number = 0;
  base: number = 5;

  acumular(valor: number) {
    this.contador += valor;
  }
}

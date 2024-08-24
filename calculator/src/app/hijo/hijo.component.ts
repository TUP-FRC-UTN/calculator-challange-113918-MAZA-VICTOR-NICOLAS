import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() firstValue: number = 0;
  @Input() secondValue: number = 0;
  screenNumber: number = 0;

  @Output() resultado = new EventEmitter<number>();

  sumar() {
    this.screenNumber = this.firstValue + this.secondValue;
    this.emitir(this.screenNumber)
  }


  restar() {
    this.screenNumber = this.firstValue - this.secondValue;
    this.emitir(this.screenNumber)
  }

  multiplicar() {
    this.screenNumber = this.firstValue * this.secondValue;
    this.emitir(this.screenNumber)
  }


  dividir() {
    if (this.secondValue !== 0) {
      this.screenNumber = this.firstValue / this.secondValue;
      this.emitir(this.screenNumber)
    } else {
      this.screenNumber = NaN;
      this.emitir(this.screenNumber)
    }
  }

  potencia() {
    this.screenNumber = Math.pow(this.firstValue, this.secondValue);
    this.emitir(this.screenNumber)
  }

  raiz() {
    if (this.firstValue >= 0) {
      this.screenNumber = Math.sqrt(this.firstValue);
      this.emitir(this.screenNumber)
    } else {
      this.screenNumber = NaN;
      this.emitir(this.screenNumber)
    }
  }

  limpiar() {
    this.screenNumber = 0
    this.emitir(this.screenNumber)
  }

  emitir(valor: number) {
    this.resultado.emit(valor);

  }
}

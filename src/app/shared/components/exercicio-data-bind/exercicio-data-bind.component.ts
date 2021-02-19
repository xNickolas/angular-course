import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-bind',
  templateUrl: './exercicio-data-bind.component.html',
  styleUrls: ['./exercicio-data-bind.component.scss']
})
export class ExercicioDataBindComponent implements OnInit {

  @Input() palavra!: string;
  @Input() color!: string;
  @Output() clicado = new EventEmitter();

  imageURL = 'https://wallpaperaccess.com/full/796847.jpg';
  initialValue = 'Valor inicial';
  isDisabled = true;
  accessibilityText = 'Um outro texto qualquer a ser lido pelo leitor de tela';
  valorDoInput = '';
  valorContador = 10;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  }

  // getImageURL() {
  //   return this.imageURL;
  // }

  onClick($event) {
    console.log('clicou!', $event);
  }

  digitouAlgo($event) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  passouMouse(){
    console.log('alguem passou mouse');
  }

  onClickBotaoEmissor($event) {
    console.log('Devo emitir informações para o componente pai.');
    this.clicado.emit($event);
  }

  // onValorAtualizadoNoContador(novoValor) {
  //   this.valorContador = novoValor;
  //   console.log('O valor foi atualizado no AppComponent', novoValor);
  // }

}

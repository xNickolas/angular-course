import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Seja bem-vindo!';
  newWord = 'CARRO';
  newColor = 'black';

  newTitle = 'Aplicação em Angular!';

  // showHeader = true;

  constructor() {}

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.newTitle = 'Outra Aplicação';

  //     setTimeout(() => {
  //       this.showHeader = false;
  //     }, 3000);
  //   }, 3000);
  // }

  eventoRecebido($event) {
    console.log('AppComponent: evento recebido.', $event);
  }


}

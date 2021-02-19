import { Component, OnInit } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constantes';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent implements OnInit {

  deveExibir = true;
  listaFrutas = [
    'Maça',
    'Laranja',
    'Mamão',
    'Pêra',
  ];

  carrosLista = [{
    placa: 'JND-7438',
    cor: 'Preto',
  }, {
    placa: 'FAS-3548',
    cor: 'Azul',
  }, {
    placa: 'HFGH-8552',
    cor: 'Branco',
  }, {
    placa: 'ASD-3657',
    cor: 'Vermelho',
  }];

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

  constructor() { }

  ngOnInit(): void {
  }

  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1, numero2) {
    return numero1 + numero2;
  }


}

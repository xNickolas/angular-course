import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {

  contatos: Contato[];
  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private contatosService: ContatosService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.contatosService.getContatos()
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSucess(response),
      error => this.onError(error)
    );
  }

  onSucess(response: Contato[]) {
    this.contatos = response;
  }

  onError(error: any){
    this.erroNoCarregamento = true;
  }

  irParaDetalhes(idContato: number) {
    this.router.navigate([`contatos/${idContato}`]);
  }

  deletarContato(idContato: number) {
    this.contatosService.deleteContato(idContato.toString())
    .subscribe(
      response => this.onSucessDeletarContato(idContato),
      errpr => this.onErrorDeletarContato(),
    );
  }

  onSucessDeletarContato(idContato) {
    this.toastr.success('Sucesso!', 'Contato deletado.');
    this.contatos = this.contatos.filter(contato => contato.id !== idContato);
  }

  onErrorDeletarContato() {

  }

  novoContato() {
    this.router.navigate(['contatos/novo']);
  }

}

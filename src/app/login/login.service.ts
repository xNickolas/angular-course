import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logar(email: string, senha: string) {
    // return this.http.gpost(this.API_URL + '/contatos/' + id, this.httpOptions);

    if (email === 'nickolsctt@gmail.com' && senha === '123456') {
      return of({
        usuario: {
          nome: 'Nickolas',
          sobrenome: 'Moreira',
          email: 'nickolsctt@gmail.com',
        },
        token: 'Ad5A1S2D15As4da84dc545',
      }).pipe(
        delay(2000)
      );
    }

    return timer(3000).pipe
      (mergeMap(() => throwError('Usuário ou senha incorretos.'))
    );
  }
}

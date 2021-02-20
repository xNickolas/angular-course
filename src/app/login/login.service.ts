import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from './../shared/services/auth/auth.service';
import { LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  logar(email: string, senha: string): Observable<LoginResponse> {
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
        delay(2000),
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })
      );
    }

    return timer(3000).pipe
      (mergeMap(() => throwError('Usuário ou senha incorretos.'))
    );
  }
}

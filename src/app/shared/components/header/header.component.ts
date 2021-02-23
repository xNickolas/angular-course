import { Component, Input } from '@angular/core';

import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;

  // title = 'Seja bem-vindo!';

  constructor(
    private authService: AuthService,
  ) {}

  // ngOnChanges() {
  //   console.log('ngOnChanges');
  // }

  // ngOnInit() {
  //   console.log('ngOnInit');
  // }

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit');
  // }

  // ngOnDestroy(){
  //   console.log('Fui destruido!');
  // }

  logout() {
    this.authService.logout();
  }

}

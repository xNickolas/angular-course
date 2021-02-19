import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  @Input() title: string;

  // title = 'Seja bem-vindo!';

  constructor() {
    console.log('Construtor');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    console.log('Fui destruido!')
  }

}

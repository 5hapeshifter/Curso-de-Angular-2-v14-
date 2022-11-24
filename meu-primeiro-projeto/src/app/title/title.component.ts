import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "Bem Vindo";

  constructor(){

  }
  
  ngOnInit(): void { // metodo iniciado assim que a aplicacao iniciar
    
  }

  ngOnChanges(): void { // metodo iniciado quando houver alguma alteracao em um ponto que esta sendo observado
    console.log("Foi alterado com sucesso.")
  }

}

import { Component } from "@angular/core";
//\
//\
//decorator ou anotação(C# ou Java), passa informação para o compilador do typescript (neste caso), dizendo para o Angular que essa classe é um componente do Angular

@Component({
    selector: 'meu-primeiro-component',
    template: `
        <p>Meu primeiro component com Angular 2!</p>
    `
})

export class MeuPrimeiroComponent {}
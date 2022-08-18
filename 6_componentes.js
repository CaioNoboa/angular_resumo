/*
    Componentes

        Pasta app
        app.component - componente principal
            .ts         - código e metadados (decorators)
            .html       - template
            .css        - estilo
            .spec.ts    - testes
        app.module.ts - módulo principal
        app-routing.module.ts - módulo de rotas

    Estrutura de um componente
        Diretivas / Dependências
            import { Component } from '@angular/core';
        
        Metadados
            @Component({
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            })
            
            @Component
                Indica que a classe representa um componente

            selector: 'app-root',
                É o nome, como iremos invocar o componente através do HTML

            templateUrl: './app.component.html',
                O caminho do template

            styleUrls: ['./app.component.css']
                O caminho do CSS

        Classe
            Parte declarativa da classe

            export class AppComponent {
                title = 'angular_rascunho_1';
            }
        
    Criando um componente
        Terminal
            ng generate component nome-componente
            ng g c nome-componente

            (criando em uma pasta específica)
            ng generate component nomeDaPasta/nome-componente
*/
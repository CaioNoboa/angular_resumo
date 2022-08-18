/*
    Angular, criado pela Google, é um framework Web, Mobile e Desktop.

    O Angular permite, a partir de outras extensões, converter a aplicação Web para Mobile e também para Desktop (programa).

    Documentação: https://angular.io/

    AngularJS != Angular
        2010 - AngularJS (versão 1.x; MVC e MVVM; Linguagem JavaScript)
        2015 - Angular (versão 2; Baseado em WebComponents; Linguagem TypeScript)
            Como Angular 2 é incompatível com AngularJS, trouxe pouca aceitação
        2016 - Angular (versão 4)
        2017 - Angular (versão 5; foi uma versão com importantes melhorias)
            Aceitação do Angular começou a aumentar
        2018 - Angular (versão 6 e 7)
        2019 - Angular (versão 8 e 9)
        2020 - Angular (versão 10 e 11)
        2021 - Angular (versão 12 e 13)
        2022 - Angular (versão 14)

        Uma versão x é compatível com x-1, contudo features da x-1 que serão removidas na x+1 serão marcadas como deprecated (obsoletas) na x.
        Dessa forma é melhor migrar de versão em versão do que dar saltos.
        O mais importante não é migrar toda vez que houver lançamento de nova versão, mas entender o que mudou nessa nova versão e conseguir se preparar para uma migração.

    Anatomia de uma APP Angular
        Angular é baseado em componentes.
        Uma aplicação é uma coleção de componentes.
        Um módulo é um conjunto de componentes e serviços (APIs e etc.).
        A aplicação pode ser composta por um ou mais módulos.
        Cada módulo pode ser uma feature diferente.

        Componentes - formado por:
            Template (arquivo HTML);
            Class (propriedades e métodos);
            Metadata (metadados, informações como a classe funciona, responsabilidades, qual template está utilizando).

        import {...} from '...';    DEPENDÊNCIAS

        @Component({                METADADOS
            selector: '...',
            templateUrl : 'componente.html',    TEMPLATE
            styles: []                          ESTILOS
        })

        export class Home {         CLASS
            mensagem = "Hello World!"
        }
*/
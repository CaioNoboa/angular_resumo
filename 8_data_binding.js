/*
    Data Binding
        Trabalhando com dados
        Forma de exibir dados recebidos de, componente, backend, ou outro, e como fazer para um dado recebido do usuário ir até o componente, backend, ou outro.

    Quatro formas de trabalhar com dados:
        Interpolation
        Property Binding
        Event Binding
        Two-way Binding
        
    Interpolation
        É a forma mais fácil de exibir um dado.
        O dado é representado no template por dois pares de chaves:
            <label>Nome:{{meuDado}}</label>

    Property Binding (utiliza [])
        Define valor de uma propriedade do elemento HTML.
        É um conceito de One-way binding, pq o valor da variável vem do componente até a property, mas não faz o caminho contrário (o componente não será atualizado se alterarmos o valor da propriedade)
        Ex.:
            <img [src]="minhaUrl">
            Isso seria o mesmo que utilizar a interpolation <img src="{{minhaUrl}}">
            Estamos usando a propriedade src da tag img

    Se o objetivo é exibir algo que está no componente para o template, Property Binding ou Interpolation são formas possíveis de fazer isso.


    Event Binding (utiliza ())
        Realiza a chamada de um método com base no evento do elemento HTML.
        Leva uma informação do template até o componente (faz o oposto do Property Binding; também é One-way binding).
        É muito utilizado para submissão de formulários ou qualquer necessidade de processamento no componente com base em eventos conhecidos dos elementos HTML.
        Ex.:
            <button (click)='funcao()'>Clique aqui</button>

    Two-way Binding (utiliza [()]; banana in a box)
        Exibe e atualiza um dado nas duas direções (template, componente).
        É a união do Property Binding com Event Binding.
        Ex.:
            <input class="form-control" type="text" [(ngModel)]="evento.nome"/>
            <label>Nome do evento:{{evento.nome}}</label>
*/
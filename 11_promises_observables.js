/*
    Promises vs Observables

    Promise
        promise
            then (quando receber resposta do servidor, p.ex, faça):
                sucesso
                erro
    
        Uma promise é uma promessa de que o resultado será entregue, daí com o then configuraremos o que ocorrerá se a comunicação der certo ou errado.
    
        São nativas do ES6
        Processa um único evento
        Não aceita cancelamento
        Não faz Retry

    Observable
        De certa forma é uma promise, mas mais completa.
        A promise retornará dados e é isso, acabou. O observable pode continuar a te entregar dados.
        Programação reativa. 

            observable
                cancelamento (já recebemos o que precisávamos, podemos cancelar)
                erro
                retry() (se der erro, podemos tentar novamente)
                podemos mandar e receber informações (push e pull)

        Objeto reativo RXJS
        Processa n eventos
        Aceita cancelamento
        Faz Retry
*/
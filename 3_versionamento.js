/*
    Versionamento
    
    Semantic Versioning (https://semver.org/)
        2.3.1
            2 major (breaking change)
            3 minor (new features, not breaking)
            1 patch (bugfixes, not breaking)

    Planejamento geral da Google para versionamento do Angular:
        Releases
        Major "1.x.x" - A cada 6 meses;
        Minor "x.1.x" - De 1 a 3 a cada major release;
        Patch "x.x.1" - Quase semanalmente;

        Previews
        Beta - Em fase de desenvolvimento e testes. É identificável como, p. ex., "10.0.0-beta-0"
        Release Candidate - Desenvolvimento completo e em testes finais. É identificável como, p. ex., "10.1.0-rc"

    Atualizando versões:
        Excluir pasta node_modules
        Instalar pacote npm-check-updates e rodar:
            npm i -g npm-check-updates
            ncu
                obs.: cores exibidas:
                    Red = major upgrade (and all major version zero)
                    Cyan = minor upgrade
                    Green = patch upgrade
        Para modificar as informações do package.json:
            ncu -u
        Instalar dependências:
            npm i
*/
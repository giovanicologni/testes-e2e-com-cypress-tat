# Testes _end-to-end_ com Cypress

## Pre-requisitos
Para clonar e executar esse projeto, você irá precisar:

- [git](https://git-scm.com/downloads) (Usei a versão `2.34.1` no momento da escrita desse documento)
- [Node.js](https://nodejs.org/en/) (Usei a versao `v18.15.0` no momento da escrita desse documento)
- npm (usei a versão `9.5.0` no momento da escrita desse documento)
**NOTA:** Quando instalar o Node.js, npm é automaticamente instalado também. Pra verificar as versões do git, node.js e npm, execute o seguinte comando no terminal de comando: **git --version && node --version && npm --version**

## Instalação
Para instalar dev dependencies, execute `npm install` no terminal de comando

## Configurando as variáveis de ambiente
Antes de executar os testes, algumas variáveis precisam ser setadas.
Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json), renomeie para `cypress.env.json` e inclua os valores apropriados das variáveis.
**NOTE:** O arquivo `cypress.env.json` não é versionado pelo git, visto que está listado no arquivo `.gitignore`.

## Executando testes
Nesse projeto, você consegue executar testes de modo interativo e headless, bem como desktop e tablet viewports.

## Modo headless
Digite no terminal de comando `npm test` para executar todos os testes no modo headless utilizando o desktop viewport;
Digite no terminal de comando `npm run test:tablet` para executar os testes apropriados no modo headless utilizando o tablet viewport.

## Modo interativo
Digite no terminal de comando `npm run cy:open` para abrir o _Cypress App_ e executar testes no modo interativo utilizando o desktop viewport.
Digite no terminal de comando `npm run cy:open:tablet` para abrir o _Cypress App_ e executar os testes no modo interativo utilizando o tablet viewport.
___
Feito por Giovani Refosco Cologni.
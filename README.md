# Testes automatizados em Front-End

## Pirâmide de testes

<!-- prettier-ignore -->
```
+ ▲                       ▲ $$$
  |          / \          | D
T |         /   \         | I
E |        / e2e \        | N
M |       /-------\       | H
P |      / integr. \      | E
O |     /-----------\     | I
  |    /   unidade   \    | R
  |   /_______________\   | O
- ▼                       ▼ $
```

- BASE: Testes de unidade

Geralmente, esses testes testam uma única unidade, ou seja, uma função, um utilitário, coisas pequenas, pequenas partes de código da sua aplicação, que executa geralmente apenas uma tarefa. Então, esses são os testes unitários, eles são mais simples, então eles são **mais rápidos** de serem executados, e consequentemente eles acabam sendo **mais baratos** também.

- MEIO: Testes de integração

São testes um pouco mais completos, que testam como as diferentes partes da aplicação trabalham em conjunto ou interagem entre si. Eles são um pouco mais robustos, por isso eles são um pouco mais difíceis de serem implementados, e é por isso que eles estão no meio da pirâmide, eles têm um custo relativamente mais elevado que os testes de unidade, e são um pouco mais difíceis de serem implementados.

- TOP: Testes de ponta a ponta

São os testes que são realizados para testar toda a aplicação, como o usuário vai interagir desde que ele acessa o navegador, abre a página, todo o processo e todo o fluxo do usuário, esses testes de ponta a ponta servem para fazer esse tipo de validação, para saber se está tudo certo com sua aplicação. Então, esses testes de ponta a ponta são muito **mais difíceis** de implementar, e consequentemente eles são também muito **mais caros**, é por isso que estão no topo da pirâmide.

Em resumo, mais próximo do topo são testes mais difíceis de implementar, consequentemente mais caros. E mais próximos da base são os testes L, que são os testes mais fáceis de implementar, mais rápidos, e consequentemente, eles custam mais barato.

## Outros testes

### Testes de acessibilidade

Visam garantir que pessoas com deficiência possam utilizar suas aplicações sem muitos problemas. Eles são feitos de forma manual ou automatizada com o uso de softwares e outras ferramentas apropriadas, inclusive podem ser feitos até mesmo por pessoas com deficiência.

Algumas das ferramentas utilizadas para testes de acessibilidade são:

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/);
- [AChecker](https://achecker.ca/);
- [Jest Axe](https://github.com/nickcolley/jest-axe);
- [Pa11y](https://github.com/pa11y/pa11y-ci).

### Testes de Regressão Visual

Este tipo de teste garante que, quando houver novas alterações nas funcionalidades de um sistema, o restante deste mesmo sistema continue funcionando normalmente. Basicamente, o que uma ferramenta de testes deste tipo faz é tirar vários screeshots dos seus componentes e/ou suas telas e salvar essas referências em alguma pasta para validá-las futuramente.

Algumas ferramentas de testes de regressão visual são:

- [Loki](https://loki.js.org/);
- [Percy](https://percy.io/);
- [Cypress](https://docs.cypress.io/guides/tooling/visual-testing).

### Plugins e extensões para análises estáticas (erros de digitação, lint, etc)

- Prettier: `yarn add -D prettier` ou `npm i -D prettier` + [extensão do VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + arquivo _.prettierrc_;
- ESLint: `yarn add -D eslint eslint-config-prettier` ou `npm i -D eslint eslint-config-prettier` + [extensão do VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + arquivo _.eslintrc_;
- Plugins para ESLint do React: `yarn add -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks` ou `npm i -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks` + arquivo _.eslintrc_;

## Test Driven Development, ou Desenvolvimento Orientado a Testes (TDD)

É uma metodologia para desenvolvimento e escrita de códigos. Essa metodologia funciona da seguinte maneira:

- Escrevemos um teste unitário que inicialmente irá falhar, já que o código testado ainda não foi implementado;
- Criamos o código que satisfaça faça o teste passar, ou seja, a implementação da funcionalidade testada. Esse código deve satisfazer imediatamente a asserção que colocamos no nosso teste;
- Quando o código estiver implementado e o teste satisfeito podemos refatorar o código. E agora que a funcionalidade está criada, ela deve passar sem que seja necessário reescrever o teste.

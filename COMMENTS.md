## Decisão da arquitetura utilizada

* Backend
    * Utilizei as validações no onModelCreating do AppDbContext para tirar a responsabilidade da model. de Student.
    * A projeto está organizado em Models, Controllers e um AppDbContext.

* Frontend

    * Vuetify com Vue.js como tecnologia do frontend
    * Utilizei o axios como lib para facilitar a conexão com o backend
    * A estrutura do projeto está separada por pastas, cada uma com sua responsabilidade

## Lista de bibliotecas de terceiros utilizadas

* Backend

    * Swashbuckle.AspNetCore - Usada para ter o Swagger UI na API.
    * Npgsql.EntityFrameworkCore.PostgreSQL - Usada para a conexão com o PostgreSQL.
    * xUnit - Utilizado para os testes unitários do backend.
    * Moq - Utilizado para mockar os dados para os testes unitários do backend.

* Frontend

    * Vuetify - Fornece todos os componentes para o frontend, além de configuração automática de rotas.
    * vee-validate - Utilizado para a validação de formulário.
    * Typescript - Auxilia com tipagens e torna mais facila definição de padrões, além de melhorar o intelisens do vscode.
    * Axios - Auxilia a conexão com o backend.

## O que você melhoraria se tivesse mais tempo

* Backend

    * Incluiria um sistema de autenticação e permissões.
    * Faria paginação em casos de consultas com muitos dados.
    * Melhor tratamento das mensagens de erro dos métodos da API.
    * Mais testes unitários, testando casos de erro.

* Frontend

    * Melhoraria a responsividade das telas.
    * Adicionaria máscara de CPF na input da tela de cadastro e na listagem.
    * Utilizaria o Vitest para os testes unitários e o Cypress para os testes e2e.

## Quais requisitos obrigatórios que não foram entregues

* Backend
    * Todos entegues.

* Frontend

    * Todos entegues.
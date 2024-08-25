# Testes de API com Cypress

Este projeto contém testes de API utilizando o Cypress. O objetivo é testar a autenticação e a manipulação de dados através da API da Typeform.

## Pré-requisitos

Para executar os testes, você precisa ter o [Node.js](https://nodejs.org/) e o [Cypress](https://www.cypress.io/) instalados. Você também deve ter um token de acesso válido para a API da Typeform.

-**`https://www.typeform.com/`** -**`Node Version:        v20.15.1`** -**`Cypress Version:     v13.10.0`**

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL-DO-REPOSITORIO>
   cd <NOME-DO-REPOSITORIO>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o token de acesso e a URL base da API no arquivo `.env`. Exemplo de configuração:

   ```env
   API_BASE_URL=https://api.typeform.com/
   ```

4. Crie um arquivo `cypress/fixtures/example.json` com o seguinte conteúdo:

   ```json
   {
     "ACCESS_TOKEN": "YOUR_ACCESS_TOKEN",
     "userAlias": "expectedAlias",
     "username": "expectedUsername",
     "formId": "yourFormId"
   }
   ```

5. Crie um arquivo `cypress/fixtures/sampleForm.json` com o conteúdo do formulário que você deseja testar. Exemplo:
   ```json
   {
     "title": "Sample Form",
     "fields": [
       {
         "type": "short_text",
         "question": "What's your name?"
       }
     ]
   }
   ```

## Execução dos Testes

Para executar os testes, use o comando:

```bash
npx cypress open
```

Isso abrirá a interface gráfica do Cypress, onde você pode selecionar e executar os testes.

# Estrutura dos Testes

Os testes estão localizados em `cypress/e2e/typeformAPI.cy.js` e estão organizados da seguinte forma:

- **`retrieves my user information`**: Testa a recuperação das informações do usuário autenticado.
- **`retrieves form responses`**: Testa a recuperação das respostas do formulário.
- **`Cleanup before start`**: Limpa os formulários existentes antes de criar um novo formulário de exemplo.
- **`creates a sample form`**: Testa a criação de um novo formulário com os dados fornecidos.

## Observações

- A API da Typeform pode alterar a estrutura dos dados retornados (por exemplo, o nome da propriedade `alias` pode mudar para `name`). Verifique o console para confirmar a estrutura dos dados retornados.
- Ajuste as expectativas e o conteúdo dos arquivos de fixture conforme necessário.

Este README foca exclusivamente na estrutura dos testes e nas observações relacionadas. Se precisar de mais alguma coisa, é só me avisar!

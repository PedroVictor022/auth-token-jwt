# API DE AUTENTICAÇÃO

Este projeto de API de autenticação, permite a autenticação de usuários e geração de tokens de acesso

## Requisitos
- Node 16 ou superior

## Instalação
- Clone este repo em uma máquina
- Execute o comando npm install para instalar as dependências do projeto.
- Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias (exemplo no arquivo .env.example).
- Execute o comando npm run dev para iniciar o servidor local.

## Rotas da API
POST - /create
  - Passe um name, email e password
POST - /auth
  - Passe um email e senha para retornar o token
GET - /users
  - Apos inserir o token no Header do Client, você tera acesso a lista de usuários

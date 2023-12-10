# ecotour-backend

## Definição do projeto

O projeto consiste em uma API RESTful para o gerenciamento de um sistema de ecoturismo. O sistema permite o cadastro de usuários, guias, passeios e reservas. O sistema também permite a busca de passeios por localização e por tipo de passeio.

## Tecnologias utilizadas

- Typescript
- NestJS
- MongoDB
- Google Cloud Platform

## Instalar Node.js, NPM e NestJS CLI

- <https://nodejs.org/en>
- via CLI: `npm i -g @nestjs/cli`
  
## Definição de Modelos

### Usuário

```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "password": "string",
  "bio": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "profilePicture": "string"
}
```

### Guia Turístico

```json
{
  "id": "uuid",
  "name": "string",
  "bio": "string",
  "specializations": ["string"],
  "rating": "number",
  "contact": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "profilePicture": "string"
}
```

### Roteiro/Passeio

```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "category": "string",
  "location": "string",
  "price": "number",
  "duration": "number",
  "guideId": "uuid",
  "availableDates": ["date"],
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "images": ["string"]
}
```

### Categoria

```json
{
  "id": "uuid",
  "name": "string",
  "description": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Reserva

```json
{
  "id": "uuid",
  "userId": "uuid",
  "tourId": "uuid",
  "reservationDate": "date",
  "status": "string",
  "paymentDetails": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Avaliação

```json
{
  "id": "uuid",
  "userId": "uuid",
  "tourId": "uuid",
  "rating": "number",
  "comment": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Localidade

```json
{
  "id": "uuid",
  "name": "string",
  "description": "string",
  "mainAttractions": ["string"],
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## Endpoints

### Usuários

- `POST /users`: Cadastrar um novo usuário
- `GET /users`: Listar todos os usuários
- `GET /users/:id`: Obter detalhes de um usuário
- `PUT /users/:id`: Atualizar um usuário
- `DELETE /users/:id`: Deletar um usuário

### Guias Turísticos

- `POST /guides`: Cadastrar um novo guia turístico
- `GET /guides`: Listar todos os guias turísticos
- `GET /guides/:id`: Obter detalhes de um guia turístico
- `PUT /guides/:id`: Atualizar um guia turístico
- `DELETE /guides/:id`: Deletar um guia turístico

### Roteiros/Passeios

- `POST /tours`: Cadastrar um novo roteiro/passeio
- `GET /tours`: Listar todos os roteiros/passeios
- `GET /tours/:id`: Obter detalhes de um roteiro/passeio
- `PUT /tours/:id`: Atualizar um roteiro/passeio
- `DELETE /tours/:id`: Deletar um roteiro/passeio

### Categorias

- `POST /categories`: Cadastrar uma nova categoria
- `GET /categories`: Listar todas as categorias
- `GET /categories/:id`: Obter detalhes de uma categoria
- `PUT /categories/:id`: Atualizar uma categoria
- `DELETE /categories/:id`: Deletar uma categoria

### Reservas

- `POST /reservations`: Fazer uma reserva
- `GET /reservations`: Listar todas as reservas
- `GET /reservations/:id`: Obter detalhes de uma reserva
- `PUT /reservations/:id`: Atualizar uma reserva
- `DELETE /reservations/:id`: Deletar uma reserva

### Avaliações

- `POST /reviews`: Cadastrar uma nova avaliação
- `GET /reviews`: Listar todas as avaliações
- `GET /reviews/:id`: Obter detalhes de uma avaliação
- `PUT /reviews/:id`: Atualizar uma avaliação
- `DELETE /reviews/:id`: Deletar uma avaliação

### Localidades

- `POST /locations`: Cadastrar uma nova localidade
- `GET /locations`: Listar todas as localidades
- `GET /locations/:id`: Obter detalhes de uma localidade
- `PUT /locations/:id`: Atualizar uma localidade
- `DELETE /locations/:id`: Deletar uma localidade

### Autenticação

- `POST /auth`: Autenticar um usuário
- `POST /auth/forgot-password`: Enviar email para redefinição de senha
- `POST /auth/reset-password`: Redefinir senha

### Busca

- `GET /search/tours`: Buscar passeios por localização e/ou categoria
- `GET /search/guides`: Buscar guias por localização e/ou especialização
- `GET /search/locations`: Buscar localidades por nome
- `GET /search/categories`: Buscar categorias por nome

### Upload de arquivos

- `POST /upload`: Upload de arquivos
- `GET /upload/:filename`: Download de arquivos
- `DELETE /upload/:filename`: Deletar arquivos
- `GET /upload`: Listar arquivos
